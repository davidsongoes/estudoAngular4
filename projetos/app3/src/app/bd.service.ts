import { Injectable } from "@angular/core";
import * as firebase from 'firebase'
import { ProgressoService } from "./progresso.service";

@Injectable()
export class BdService {

    constructor(private progressoService: ProgressoService) { }

    public publicar(publicacao: any): void {

        firebase.database().ref(`publicacao/${btoa(publicacao.email)}`)
            .push({ titulo: publicacao.titulo })
            .then((response) => {
                let nomeImagem = response.key
                firebase.storage().ref()
                    .child(`imagens/${nomeImagem}`)
                    .put(publicacao.imagem)
                    .on(firebase.storage.TaskEvent.STATE_CHANGED,
                        // Ação para o acompanhamento
                        (snapshot: any) => {
                            this.progressoService.status = 'andamento'
                            this.progressoService.estado = snapshot
                            // console.log('Snapshot capturado no on(): ', snapshot)
                        },
                        (error) => {
                            this.progressoService.status = 'erro'
                            // console.log(error)
                        },
                        () => {
                            // finalização do upload
                            this.progressoService.status = 'concluido'
                            // console.log('Upload completado')
                        }
                    )
            })
    }

    public consultaPublicacaoes(email: string): any {
        // consultar as publicações (database)
        firebase.database().ref(`publicacoes/${btoa(email)}`)
            .once('value')
            .then((snapshot: any) => {
                let publicacoes: Array<any> = []
                snapshot.forEach((childSnapshot: any) => {
                    let publicacao: any = childSnapshot.val()
                    // consultar a url da imagem (storage)
                    firebase.storage().ref()
                        .child(`imagens/${childSnapshot.key}`)
                        .getDownloadURL()
                        .then((url: string) => {
                            publicacao.url_imagem = url
                            // consultar o nome do usuário
                            firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
                                .once('value')
                                .then((snapshot: any) => {
                                    publicacao.nome_usuario = snapshot.val().nome_usuario
                                    publicacoes.push(publicacao)
                                })
                        })
                })
                console.log(publicacoes)
            })
    }
}