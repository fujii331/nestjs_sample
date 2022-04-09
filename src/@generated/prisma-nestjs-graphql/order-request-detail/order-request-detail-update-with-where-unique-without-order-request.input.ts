import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { OrderRequestDetailUpdateWithoutOrderRequestInput } from './order-request-detail-update-without-order-request.input';

@InputType()
export class OrderRequestDetailUpdateWithWhereUniqueWithoutOrderRequestInput {
  @Field(() => OrderRequestDetailWhereUniqueInput, { nullable: false })
  where!: OrderRequestDetailWhereUniqueInput;

  @Field(() => OrderRequestDetailUpdateWithoutOrderRequestInput, {
    nullable: false,
  })
  data!: OrderRequestDetailUpdateWithoutOrderRequestInput;
}
