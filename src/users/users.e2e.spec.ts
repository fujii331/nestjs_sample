import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module';
import { userFactory } from '../../test/factories/users.factory';
import { AuthService } from '../../src/auth/auth.service';
import { cleanupDatabase } from '../../test/cleanup-database';

describe('Users', () => {
  let authService: AuthService;
  let app: INestApplication;

  beforeEach(async () => {
    await cleanupDatabase();
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    app = module.createNestApplication();
    await app.init();
  });

  // テスト終了後の処理
  afterEach(async () => {
    await app.close();
  });

  describe('firstUser', () => {
    it('authorization error', async () => {
      const user = await userFactory.create({
        email: 'notAuthorization@example.com',
        authority: 'FIRST',
      });

      return request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `
              query {
                firstUser(
                  firstUserInput: {
                    email: "${user.email}"
                  }
                ) {
                  email
                  name
                  authority
                }
              }
            `,
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.errors[0].message).toEqual('Unauthorized');
        });
    });

    it('forbidden error', async () => {
      const user = await userFactory.create({
        email: 'fobidden@example.com',
        authority: 'SECOND',
      });

      const loginInfo = await authService.login(user);

      return request(app.getHttpServer())
        .post('/graphql')
        .set('Authorization', `Bearer ${loginInfo.access_token}`)
        .send({
          query: `
              query {
                firstUser(
                  firstUserInput: {
                    email: "${user.email}"
                  }
                ) {
                  email
                  name
                  authority
                }
              }
            `,
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.errors[0].message).toEqual('Forbidden');
        });
    });

    it('should get a user', async () => {
      const user = await userFactory.create({
        authority: 'FIRST',
      });

      const loginInfo = await authService.login(user);

      return request(app.getHttpServer())
        .post('/graphql')
        .set('Authorization', `Bearer ${loginInfo.access_token}`)
        .send({
          query: `
              query {
                firstUser(
                  firstUserInput: {
                    email: "${user.email}"
                  }
                ) {
                  email
                  name
                  authority
                }
              }
            `,
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.firstUser).toEqual({
            email: user.email,
            name: user.name,
            authority: user.authority,
          });
        });
    });
  });

  describe('createUser', () => {
    it('should create a new user', () => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `
            mutation {
              createUser(
                data: {
                    email: "john.doe@example.com",
                    name: "John Doe",
                    password: "password12345",
                }
              ) {
                email
                name
              }
            }
          `,
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.createUser).toEqual({
            email: 'john.doe@example.com',
            name: 'John Doe',
          });
        });
    });
  });
});
