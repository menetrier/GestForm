import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(`
      <h1>Hello world !</h1>
      <div>Looking for the GestForm exercice ? <a href='/gest-form'>Here we go !</a></div>
      <div>(You can also customize the route param to generate a custom sized array E.g. <a href='/gest-form/75'>/gest-form/75</a>)</div>
    `);
  });

  it('/gest-form (GET)', async () => {
    let req = await request(app.getHttpServer())
      .get('/gest-form');

    expect(req.status).toBe(200);
    expect(req.body.length).toBe(42);
  });
});
