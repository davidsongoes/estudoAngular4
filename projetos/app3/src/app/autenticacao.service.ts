import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Usuario } from "./acesso/usuario.model";
import * as firebase from 'firebase'
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoService {

    public token_id: string
    public error: Error

    constructor(private router: Router) { }

    public cadastrarUsuario(usuario: Usuario): Promise<any> {
        return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(usuario.email, usuario.senha)
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

    public autenticar(email: string, senha: string): void {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((response: any) => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        this.token_id = idToken
                        localStorage.setItem('idToken', idToken)
                        this.router.navigate(['/home'])
                    })
            })
            .catch((error: Error) => {
                if(error){
                    this.error = error
                }
            })
    }

    public autenticado(): boolean {
        if (this.token_id === undefined && localStorage.getItem('idToken') != null) {
            this.token_id = localStorage.getItem('idToken')
        }
        if (this.token_id === undefined){
            this.router.navigate(['/'])
        }
        return this.token_id !== undefined
    }

    public sair(): void {
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('idToken')
                this.token_id = undefined
                this.router.navigate(['/'])
            })
    }

    public emitirError(): boolean {
        if(this.error){
            return true
        }else{
            return false
        }
    }
}