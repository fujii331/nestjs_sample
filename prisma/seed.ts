import { ObjectType } from '@nestjs/graphql';
import { userFactory } from '../test/factories/users.factory';

const doSeed = async () => {
  @ObjectType()
  class UserSeed {
    email?: string;
    name?: string;
  }

  const userSeedData: Array<UserSeed> = [
    { name: 'テスト 一郎', email: 'test1@example.com' },
    { name: 'テスト 二郎', email: 'test2@example.com' },
    { name: 'テスト 三郎', email: 'test3@example.com' },
    { name: 'テスト 四郎', email: 'test4@example.com' },
    { name: 'テスト 五郎', email: 'test5@example.com' },
  ];

  // user
  for (const userSeed of userSeedData) {
    const user = await userFactory.create({
      name: userSeed.name,
      email: userSeed.email,
    });
    console.log(user);
  }
};

const main = async () => {
  console.log(`Start seeding ...`);

  await doSeed();

  console.log(`Seeding finished.`);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
