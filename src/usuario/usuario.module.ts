
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bcrypt } from "../auth/bcrypt/bsrypt";

import { UsuarioController } from "./controller/usuario.controlle";
import { UsuarioEntity } from "./entities/usuario.entities";
import { UsuarioServices } from "./services/usuario.service";



@Module({
    imports:[TypeOrmModule.forFeature([UsuarioEntity])],
    providers: [UsuarioServices,Bcrypt],
    controllers:[UsuarioController],
    exports: [TypeOrmModule,UsuarioServices]
})
export class UsuarioModule{}