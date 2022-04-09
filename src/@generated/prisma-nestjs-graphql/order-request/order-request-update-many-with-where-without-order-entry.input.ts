import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestScalarWhereInput } from './order-request-scalar-where.input';
import { OrderRequestUpdateManyMutationInput } from './order-request-update-many-mutation.input';

@InputType()
export class OrderRequestUpdateManyWithWhereWithoutOrderEntryInput {
  @Field(() => OrderRequestScalarWhereInput, { nullable: false })
  where!: OrderRequestScalarWhereInput;

  @Field(() => OrderRequestUpdateManyMutationInput, { nullable: false })
  data!: OrderRequestUpdateManyMutationInput;
}
