import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestUpdateManyMutationInput } from './order-request-update-many-mutation.input';
import { OrderRequestWhereInput } from './order-request-where.input';

@ArgsType()
export class UpdateManyOrderRequestArgs {
  @Field(() => OrderRequestUpdateManyMutationInput, { nullable: false })
  data!: OrderRequestUpdateManyMutationInput;

  @Field(() => OrderRequestWhereInput, { nullable: true })
  where?: OrderRequestWhereInput;
}
