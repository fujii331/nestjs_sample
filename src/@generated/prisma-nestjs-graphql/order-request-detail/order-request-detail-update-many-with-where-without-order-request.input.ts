import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailScalarWhereInput } from './order-request-detail-scalar-where.input';
import { OrderRequestDetailUpdateManyMutationInput } from './order-request-detail-update-many-mutation.input';

@InputType()
export class OrderRequestDetailUpdateManyWithWhereWithoutOrderRequestInput {
  @Field(() => OrderRequestDetailScalarWhereInput, { nullable: false })
  where!: OrderRequestDetailScalarWhereInput;

  @Field(() => OrderRequestDetailUpdateManyMutationInput, { nullable: false })
  data!: OrderRequestDetailUpdateManyMutationInput;
}
