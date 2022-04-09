import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestCreateWithoutOrderRequestDetailInput } from './order-request-create-without-order-request-detail.input';
import { OrderRequestCreateOrConnectWithoutOrderRequestDetailInput } from './order-request-create-or-connect-without-order-request-detail.input';
import { OrderRequestUpsertWithoutOrderRequestDetailInput } from './order-request-upsert-without-order-request-detail.input';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { OrderRequestUpdateWithoutOrderRequestDetailInput } from './order-request-update-without-order-request-detail.input';

@InputType()
export class OrderRequestUpdateOneRequiredWithoutOrderRequestDetailInput {
  @Field(() => OrderRequestCreateWithoutOrderRequestDetailInput, {
    nullable: true,
  })
  create?: OrderRequestCreateWithoutOrderRequestDetailInput;

  @Field(() => OrderRequestCreateOrConnectWithoutOrderRequestDetailInput, {
    nullable: true,
  })
  connectOrCreate?: OrderRequestCreateOrConnectWithoutOrderRequestDetailInput;

  @Field(() => OrderRequestUpsertWithoutOrderRequestDetailInput, {
    nullable: true,
  })
  upsert?: OrderRequestUpsertWithoutOrderRequestDetailInput;

  @Field(() => OrderRequestWhereUniqueInput, { nullable: true })
  connect?: OrderRequestWhereUniqueInput;

  @Field(() => OrderRequestUpdateWithoutOrderRequestDetailInput, {
    nullable: true,
  })
  update?: OrderRequestUpdateWithoutOrderRequestDetailInput;
}
