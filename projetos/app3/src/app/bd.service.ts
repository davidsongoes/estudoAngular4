import * as firebase from 'firebase'

export class BdService {
    public publicar(publicacao: any): void {

        let nomeImagem = Date.now()
        console.log(publicacao)

        firebase.storage().ref()
        .child(`imagens/${nomeImagem}`)
        .put(publicacao.imagem)

        // firebase.database().ref(`publicacao/${btoa(publicacao.email)}`)
        // .push( { titulo: publicacao.titulo} )
        // console.log(publicacao)
    }
}