import { IsNotEmpty, MaxLength } from "class-validator";

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_usuario"})
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(50)
@Column({length: 1000, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    login: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    senha: string
    
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    foto: string

   
}