import { Usuario } from "./acesso/usuario.model";

export class AutenticacaoService {
    public cadastrarUsuario(usuario: Usuario): void {
        console.log('Chegamos ate o serviço ', usuario)
    }
}