import * as firebase from 'firebase'

export class BdService {
    public publicar(publicacao: any): void {

        let nomeImagem = Date.now()
        console.log(publicacao)

        firebase.storage().ref()
        .child(`imagens/${nomeImagem}`)
        .put(publicacao.imagem)
        .on(firebase.storage.TaskEvent.STATE_CHANGED,
            // Ação para o acompanhamento
        (snapshot: any) => {
            console.log(snapshot)
        },
        (error) => {
            console.log(error)
        },
        () => {
            // finalização do upload
            console.log('Upload completado')
        }
        
        )
        // firebase.database().ref(`publicacao/${btoa(publicacao.email)}`)
        // .push( { titulo: publicacao.titulo} )
        // console.log(publicacao)
    }
}