import { Usuario } from "./acesso/usuario.model";
import * as firebase from 'firebase'

export class AutenticacaoService {
    public cadastrarUsuario(usuario: Usuario): void {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(usuario.email, usuario.senha)
            .then((response) => {
                console.log(response)
            })
    }
}