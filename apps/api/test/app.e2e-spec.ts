<<<<<<< HEAD
import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiModule } from '@apps/api/src/api.module'; 
import { setNestApp } from '@libs/common/src/global-settings';
=======
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ApiModule } from './../src/api.module';
>>>>>>> origin/main

describe('ApiController (e2e)', () => {
  let app: INestApplication;

<<<<<<< HEAD
  beforeAll(async () => {
=======
  beforeEach(async () => {
>>>>>>> origin/main
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ApiModule],
    }).compile();

    app = moduleFixture.createNestApplication();
<<<<<<< HEAD
    setNestApp(app);
=======
>>>>>>> origin/main
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
