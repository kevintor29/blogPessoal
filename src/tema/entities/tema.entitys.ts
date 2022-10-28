import { IsNotEmpty } from "class-validator";


import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/entities.module";

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