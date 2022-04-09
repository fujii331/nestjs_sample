import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { OrderRequestDetailUpdateWithoutOrderRequestInput } from './order-request-detail-update-without-order-request.input';
import { OrderRequestDetailCreateWithoutOrderRequestInput } from './order-request-detail-create-without-order-request.input';

@InputType()
export class OrderRequestDetailUpsertWithWhereUniqueWithoutOrderRequestInput {
  @Field(() => OrderRequestDetailWhereUniqueInput, { nullable: false })
  where!: OrderRequestDetailWhereUniqueInput;

  @Field(() => OrderRequestDetailUpdateWithoutOrderRequestInput, {
    nullable: false,
  })
  update!: OrderRequestDetailUpdateWithoutOrderRequestInput;

  @Field(() => OrderRequestDetailCreateWithoutOrderRequestInput, {
    nullable: false,
  })
  create!: OrderRequestDetailCreateWithoutOrderRequestInput;
}
