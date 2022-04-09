import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestUpdateWithoutOrderRequestDetailInput } from './order-request-update-without-order-request-detail.input';
import { OrderRequestCreateWithoutOrderRequestDetailInput } from './order-request-create-without-order-request-detail.input';

@InputType()
export class OrderRequestUpsertWithoutOrderRequestDetailInput {
  @Field(() => OrderRequestUpdateWithoutOrderRequestDetailInput, {
    nullable: false,
  })
  update!: OrderRequestUpdateWithoutOrderRequestDetailInput;

  @Field(() => OrderRequestCreateWithoutOrderRequestDetailInput, {
    nullable: false,
  })
  create!: OrderRequestCreateWithoutOrderRequestDetailInput;
}
