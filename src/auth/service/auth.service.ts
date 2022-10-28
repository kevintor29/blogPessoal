import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioServices } from "../../usuario/services/usuario.service";

import { Bcrypt } from "../bcrypt/bsrypt";
import { UsuarioLogin } from "../entities/usuariologin ";

@Injectable()
export class AuthService{
    constructor(
        private usuarioService: UsuarioServices ,
        private jwtservice: JwtService,
        private bcrypt: Bcrypt
    ){}
    async ValidarUsuario(username:string, password:string):Promise<any>{
        const buscarUsuario = await this.usuarioService.findByLogin(username)
        if(!buscarUsuario)
        throw new HttpException(`usuario nao encontrado`,HttpStatus.NOT_FOUND)

        const match= await this.bcrypt.comparaSenha(buscarUsuario.senha,password)

        if(buscarUsuario && match){
            const { senha, ...result } = buscarUsuario
            return result;
        }
        return null;
    }
    async Login(usuarioLogin: UsuarioLogin){
        const payload = {username : usuarioLogin.login, sub:"db_blogpessoal"}
        return {
            login: usuarioLogin.login,
            token: `Bearer ${this.jwtservice.sign(payload)}`
        }
    }
}