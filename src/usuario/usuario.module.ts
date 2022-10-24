import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "./controller/usuario.controlle";
import { UsuarioEntity } from "./entities/usuario.entities";
import { UsuarioServices } from "./services/usuario.service";



@Module({
    imports:[TypeOrmModule.forFeature([UsuarioEntity])],
    providers: [UsuarioServices],
    controllers:[UsuarioController],
    exports: [TypeOrmModule]
})
export class UsuarioModule{}