import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { UsersModule } from './users.module';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { User } from '@prisma/client';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
    service = module.get<UsersService>(UsersService);
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userCreateInput: CreateOneUserArgs = {
        data: {
          name: 'John Doe',
          password: 'password',
          email: 'john.doe@email.com',
          authority: 'FIRST',
          createdAt: '2022-04-01 15:08:09.703',
          updatedAt: '2022-04-01 15:08:09.703',
        },
      };
      const createUserServiceInput: CreateOneUserArgs = {
        data: {
          name: 'John Doe',
          password: 'password',
          email: 'john.doe@email.com',
          authority: 'FIRST',
          createdAt: '2022-04-01 15:08:09.703',
          updatedAt: '2022-04-01 15:08:09.703',
        },
      };
      const userCreateReturn: User = {
        id: 1,
        name: 'John Doe',
        password: 'password',
        email: 'john.doe@email.com',
        authority: 'FIRST',
        hashedRefreshToken: null,
        createdAt: new Date('2022-04-01 15:08:09.703'),
        updatedAt: new Date('2022-04-01 15:08:09.703'),
      };
      const mock = jest
        .spyOn(service, 'createUser')
        .mockImplementation(() => Promise.resolve(userCreateReturn));
      const newUser = await resolver.createUser(userCreateInput);
      // passwordが変換されていること（password個別での確認はできない）
      expect(mock).not.toHaveBeenCalledWith(createUserServiceInput);
      // createUserの返り値を確認
      expect(newUser).toMatchObject(userCreateReturn);
    });
  });
});
