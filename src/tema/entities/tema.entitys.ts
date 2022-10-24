import { IsNotEmpty } from "class-validator";
import { Postagem } from "src/postagem/entities/entities.module";

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_temas"})
export class Tema {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable:false})
    descricao: string 

    @OneToMany(() => Postagem, (Postagem) => Postagem.tema)
    postagem: Postagem[]
}