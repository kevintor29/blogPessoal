import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
    getbsm(): string{
    return 'MENTALIDADES<br><br>Responsabilidade Pessoal <br> Eu descrevo responsabilidade pessoal como assumir '+
    '<br>responsabilidade por meu trabalho, minhas decisões e suas consequências'+
    '<br>Eu demonstro responsabilidade pessoal trabalhando'+
    '<br>duro, mantendo compromissos e não dando'+
    '<br>desculpas, enquanto concluo as sessões e o'+
    '<br>trabalho <br> <br>'+
    'Mentalidade de Crescimento'+
    '<br>Eu descrevo mentalidade de crescimento como a'+
    '<br>crença de que a inteligência não é fixa; a crença de'+
    '<br>que quando você pratica algo ao longo do tempo,'+
    '<br>você melhora.'+
    '<br>E'+
    '<br>Eu demonstro uma mentalidade de crescimento'+
    '<br>trabalhando duro para melhorar nas atividades de'+
    '<br>sessão e desenvolver habilidades exigidas de um'+
    '<br>futuro desenvolvedor Java.'+
    '<br> <br> PERSISTENCIA <br><br> '+
    'TRABALHO EM EQUIPE <br><br>'+
    'ATENÇAO AOS DETALHES<br>'+
    'PROACTIVIDADE <br>'+
    'COMUNICAÇAO';
  }
  getaprendizado(): string {
    return 'OBJETIVOS DE APRENDIZADO <br>'+
    'ENTENDER UMA API E APRENDER BASE DE DADOS';
  }
}
