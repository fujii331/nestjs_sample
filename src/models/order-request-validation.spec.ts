import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { OrderRequestCreateInput } from '../@generated/prisma-nestjs-graphql/order-request/order-request-create.input';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';

describe('OrderRequestValidation', () => {
  const defaultInput = {
    containerNo: 2,
    orderRequestNo: 'Request3',
    deliveryDate: new Date(),
    poRequestDate: new Date(),
    deliveryPort: 'INZAI',
    poStatus: 0,
    discarded: true,
  };

  it('success', async () => {
    const errors = await validate(
      plainToInstance(OrderRequestCreateInput, defaultInput),
    );
    expect(errors.length).toBe(0);
  });

  it('failed', async () => {
    const failPasswordInput = Object.assign(defaultInput, {
      containerNo: undefined,
    });

    const errors = await validate(
      plainToInstance(OrderRequestCreateInput, failPasswordInput),
    );

    expect(errors.length).toBe(1);
    expect(errors.toString()).toContain(
      `property containerNo has failed the following constraints: isNotEmpty`,
    );
  });
});
