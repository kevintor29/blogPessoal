import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Postagem } from './postagem/entities/entities.module';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entitys';
import { TemaModule } from './tema/tema.module';
import { UsuarioEntity } from './usuario/entities/usuario.entities';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [Postagem,Tema,UsuarioEntity],
      synchronize: true
    }),
     PostagemModule,TemaModule,UsuarioModule,AuthModule
  ],
  

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
