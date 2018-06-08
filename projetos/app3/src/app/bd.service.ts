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
        firebase.database().ref(`publicacoes/${btoa(email)}`)
        .once('value')
        .then((snapshot: any) => {
            console.log(snapshot.val())
        })
    }
}