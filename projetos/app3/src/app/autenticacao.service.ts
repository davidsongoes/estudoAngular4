import { Usuario } from "./acesso/usuario.model";
import * as firebase from 'firebase'

export class AutenticacaoService {
    public cadastrarUsuario(usuario: Usuario): void {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(usuario.email, usuario.senha)
            .then((response) => {
                console.log(response)

                // remover a senha do atributo senha do objeto usuário
                delete usuario.senha

                // registrando dados complementares no path email na base 64
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                .set(usuario)
                console.log(usuario)

            })
            .catch((error: Error) => {
                console.log(error)
            })
    }
}