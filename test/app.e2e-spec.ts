import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { send } from 'process';

describe('teste de modulos usuario y auth (e2e)', () => {
  let token:any;
  let usuarioId: any;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
         port :3306,
         username: 'root',
         password:'root',
         database: 'db_blogpessoal_test',
         autoLoadEntities: true,
         synchronize: true,
         logging: false,
         dropSchema: true

      })
        ,AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

  });
  afterAll(async ()=>{
    await app.close()
  })
  it('01 - Deve cadastrar Usuario',async () => {
    const resposta = await request(app.getHttpServer())
    .post('/usuario/cadastrar')
    .send({
      nome: 'Root',
      login: 'root@root.com',
      senha: '123456789',
      foto: 'knm3kim34m344424nsdsm3'
    });
    expect(201)
    usuarioId = resposta.body.id
  })
it ('02 deve autenticar usuario (login)',async () => {
  const resposta = await request (app.getHttpServer())
 .post('/auth/logar')
 .send({
  login: 'root@root.com',
      senha: '123456789'
 })
 expect(200)
 token = resposta.body.token
})
it('03 - Não deve Duplicar ousuario',async () => {
  return request(app.getHttpServer())
  .post('/usuario/cadastrar')
  .send({
    nome: 'Root',
      login: 'root@root.com',
      senha: '123456789',
      foto: 'knm3kim34m344424nsdsm3'
  })
  .expect(400)
})
it('04 - Deve listar todos os usuarios',async () => {
  return request(app.getHttpServer())
  .get('/usuario/all')
  .set('Authorization', `${token}`)
  .send({})
  .expect(200)
})
it('05 - deve atualizar um usuario',async () => {
  return request(app.getHttpServer())
  .put('/usuario/actualizar')
  .set('Authorization', `${token}`)
  .send({
    id: usuarioId,
    nome: 'jorgino',
      login: 'root@root.com',
      senha: '123456789',
      foto: 'knm3kim34m344424nsdsm3'
  })
  .expect(200)
  .then(resposta =>{
    expect("jorgino").toEqual(resposta.body.nome)
  })
})

});
