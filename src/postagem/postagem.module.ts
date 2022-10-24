import { Module } from "@nestjs/common";
import { Postagem } from "./entities/entities.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemController } from "./controller/postagem.controller";
import { PostagemService } from "./service/postagem.services";


@Module({ 
    imports:[TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
        controllers: [PostagemController],
        exports: [TypeOrmModule]
})
export class PostagemModule {}