import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { DeleteResult, ILike, Repository } from "typeorm";
import { Bcrypt } from "../../auth/bcrypt/bsrypt";
import { UsuarioEntity } from "../entities/usuario.entities";




@Injectable()
 export class UsuarioServices{

    constructor(
        @InjectRepository(UsuarioEntity)
        private UsuarioRepositori: Repository<UsuarioEntity>,
        private bcrypt: Bcrypt
    ){}
    async findAll(): Promise<UsuarioEntity[]>{
       return await this.UsuarioRepositori.find({ 
       relations:{
         postagem: true
       }
    })
    }
    async findById(id: number): Promise<UsuarioEntity| undefined> {
        let usuario = await this.UsuarioRepositori.findOne({
           where:{
            id
        }, 
        relations: {
            postagem: true
        }
        })
        if (!usuario)
        throw new HttpException(`UsuarioEntity nao encontrado`,HttpStatus.NOT_FOUND)

        return usuario
    }
    async findByNome(nome: string):Promise<UsuarioEntity[]>{
        return await this.UsuarioRepositori.find({
            where:{
                nome: ILike(`%${nome}%`)
            }
        })
    }
    async findByLogin(login: string):Promise<UsuarioEntity | undefined>{
        return  await this.UsuarioRepositori.findOne({
            where:{
                login: login
            }
        })
        
    }
    async findBySenha(senha: string):Promise<UsuarioEntity[]>{
        return await this.UsuarioRepositori.find({
            where:{
                senha: senha
            }
        })
    }
    async findByFoto(foto: string):Promise<UsuarioEntity[]>{
        return await this.UsuarioRepositori.find({
            where:{
                foto: ILike(`%${foto}%`)
            }
        })
    }
    async create(usuario: UsuarioEntity):Promise<UsuarioEntity>{
        let buscarUsuario = await this.findByLogin(usuario.login)
        if (!buscarUsuario){
            usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
       return await this.UsuarioRepositori.save(usuario)
        }
        throw new HttpException('Usuario  não encontrado', HttpStatus.BAD_REQUEST)
    }

    async update(usuario: UsuarioEntity): Promise<UsuarioEntity>{
        let updateUsuario:UsuarioEntity= await this.findById(usuario.id)
        let buscarUsuario= await this.findByLogin(usuario.login)

        if (!updateUsuario) {
            throw new HttpException(`UsuarioEntity nao foi encontrado`,HttpStatus.NOT_FOUND)
        }

        if(!buscarUsuario && buscarUsuario.id !==usuario.id)
        throw new HttpException(`Usuario ja cadastrado`,HttpStatus.BAD_REQUEST)

        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.UsuarioRepositori.save(usuario)

    }
    async delete(id: number): Promise<DeleteResult> {
        let buscarUsuario = await this.findById(id)

        if(!buscarUsuario)
            throw new HttpException('Usuario  não encontrado', HttpStatus.NOT_FOUND)

      
        return await this.UsuarioRepositori.delete(id)
    }
 }