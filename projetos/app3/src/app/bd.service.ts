import * as firebase from 'firebase'

export class BdService {
    public publicar(publicacao: any): void {

        firebase.database().ref(`publicacao/${btoa(publicacao.email)}`)
        .push( { titulo: publicacao.titulo} )
        console.log(publicacao)
    }
}