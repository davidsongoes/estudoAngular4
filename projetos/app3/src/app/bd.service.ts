import { Injectable } from "@angular/core";
import * as firebase from 'firebase'
import { ProgressoService } from "./progresso.service";

@Injectable()
export class BdService {

    constructor(private progressoService: ProgressoService) { }

    public publicar(publicacao: any): void {

        let nomeImagem = Date.now()
        console.log(publicacao)

        firebase.storage().ref()
            .child(`imagens/${nomeImagem}`)
            .put(publicacao.imagem)
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
                // Ação para o acompanhamento
                (snapshot: any) => {
                    this.progressoService.status = 'andamento'
                    this.progressoService.estado = snapshot
                    console.log('Snapshot capturado no on(): ',snapshot)
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
        // firebase.database().ref(`publicacao/${btoa(publicacao.email)}`)
        // .push( { titulo: publicacao.titulo} )
        // console.log(publicacao)
    }
}