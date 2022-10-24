import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaController } from "./controller/tema.controller";
import { Tema } from "./entities/tema.entitys";
import { TemaService } from "./services/tema.sevice";



@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers:[TemaService],
    controllers:[TemaController],
    exports: [TypeOrmModule],

})
    export class TemaModule { }