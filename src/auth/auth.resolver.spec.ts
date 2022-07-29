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

  describe('login', () => {
    it('should get tokens', async () => {
      const user = await userFactory.create({
        authority: 'FIRST',
      });

      const loginInfo = await authService.login(user);

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `
              mutation {
                login(
                  idToken: "test"
                ) {
                  access_token,
                  refresh_token
                }
              }
            `,
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.data).toEqual({
            login: {
              access_token: expect.anything(),
              refresh_token: expect.anything(),
            },
          });
        });

      expect(response.get('Set-Cookie')[0].startsWith('atlasToken='))
        .toBeTruthy;
    });
  });
});
