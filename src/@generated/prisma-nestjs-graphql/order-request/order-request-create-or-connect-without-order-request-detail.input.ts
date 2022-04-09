import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { OrderRequestCreateWithoutOrderRequestDetailInput } from './order-request-create-without-order-request-detail.input';

@InputType()
export class OrderRequestCreateOrConnectWithoutOrderRequestDetailInput {
  @Field(() => OrderRequestWhereUniqueInput, { nullable: false })
  where!: OrderRequestWhereUniqueInput;

  @Field(() => OrderRequestCreateWithoutOrderRequestDetailInput, {
    nullable: false,
  })
  create!: OrderRequestCreateWithoutOrderRequestDetailInput;
}
