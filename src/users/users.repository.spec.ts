import { Test, TestingModule } from '@nestjs/testing';
import { cleanupDatabase } from '../../test/cleanup-database';
import { CreateOneUserArgs } from '../@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { PrismaService } from '../prisma.service';
import { UsersModule } from './users.module';
import { UsersRepository } from './users.repository';

describe('UsersRepository', () => {
  let repository: UsersRepository;
  const prisma = new PrismaService();

  beforeEach(async () => {
    await cleanupDatabase();
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    repository = module.get<UsersRepository>(UsersRepository);
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userCreateInput: CreateOneUserArgs = {
        data: {
          name: 'John Doe',
          password: 'password',
          email: 'john.doe@email.com',
          authority: 'FIRST',
        },
      };
      // 実行
      await repository.createUser(userCreateInput);

      const savedUsers = await prisma.user.findMany({
        where: { email: userCreateInput.data.email },
        take: 1,
      });

      expect(savedUsers[0].name).toBe(userCreateInput.data.name);
      expect(savedUsers[0].password).toBe(userCreateInput.data.password);
      expect(savedUsers[0].email).toBe(userCreateInput.data.email);
      expect(savedUsers[0].authority).toBe(userCreateInput.data.authority);
    });
  });
});
