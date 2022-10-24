import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class Bcrypt{
    async criptografarsenha(senha: string):Promise<string>{
    let saltos:number =10
    return await bcrypt.hash(senha,saltos);
    }
    async comparasenha  (senhaBanco:string,senhaDigitada: string):Promise<boolean>{
    return bcrypt.compareSync(senhaDigitada,senhaBanco);
    }
}