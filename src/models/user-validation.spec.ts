import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';

describe('UsersValidation', () => {
  const defaultInput = {
    name: 'John Doe',
    password: 'password',
    email: 'john.doe@email.com',
    authority: 'FIRST',
  };

  it('success', async () => {
    const errors = await validate(
      plainToInstance(UserCreateInput, defaultInput),
    );
    expect(errors.length).toBe(0);
  });

  it('failed', async () => {
    const failPasswordInput = Object.assign(defaultInput, { password: 'pass' });

    const errors = await validate(
      plainToInstance(UserCreateInput, failPasswordInput),
    );

    expect(errors.length).toBe(1);
    expect(errors.toString()).toContain(
      `property password has failed the following constraints: minLength`,
    );
  });
});
