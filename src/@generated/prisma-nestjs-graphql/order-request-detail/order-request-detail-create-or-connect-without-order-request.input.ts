import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { OrderRequestDetailCreateWithoutOrderRequestInput } from './order-request-detail-create-without-order-request.input';

@InputType()
export class OrderRequestDetailCreateOrConnectWithoutOrderRequestInput {
  @Field(() => OrderRequestDetailWhereUniqueInput, { nullable: false })
  where!: OrderRequestDetailWhereUniqueInput;

  @Field(() => OrderRequestDetailCreateWithoutOrderRequestInput, {
    nullable: false,
  })
  create!: OrderRequestDetailCreateWithoutOrderRequestInput;
}
