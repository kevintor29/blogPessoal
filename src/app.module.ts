import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Postagem } from './postagem/entities/entities.module';
import { PostagemModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entitys';
import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [Postagem,Tema],
      synchronize: true
    }),
     PostagemModule,TemaModule
  ],
  

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
