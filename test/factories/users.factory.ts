import { Authority } from '../../src/@generated/prisma-nestjs-graphql/prisma/authority.enum';
import { UserCreateInput } from '../../src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from '../../src/@generated/prisma-nestjs-graphql/user/user.model';
import { createFactory } from './create-factory';

const defaultAttributes: UserCreateInput = {
  email: 'test@example.com',
  name: 'テスト 太郎',
  password: '$2b$10$UllSqBsDselYKeW.aI/A.OsGFv2NDrPorP63J3JloaeYy8wdbKGsG',
  authority: Authority.FIRST,
};

export const userFactory = createFactory<UserCreateInput, User>(
  'user',
  defaultAttributes,
);
