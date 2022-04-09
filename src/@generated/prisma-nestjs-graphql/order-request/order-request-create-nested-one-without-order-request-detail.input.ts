import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestCreateWithoutOrderRequestDetailInput } from './order-request-create-without-order-request-detail.input';
import { OrderRequestCreateOrConnectWithoutOrderRequestDetailInput } from './order-request-create-or-connect-without-order-request-detail.input';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';

@InputType()
export class OrderRequestCreateNestedOneWithoutOrderRequestDetailInput {
  @Field(() => OrderRequestCreateWithoutOrderRequestDetailInput, {
    nullable: true,
  })
  create?: OrderRequestCreateWithoutOrderRequestDetailInput;

  @Field(() => OrderRequestCreateOrConnectWithoutOrderRequestDetailInput, {
    nullable: true,
  })
  connectOrCreate?: OrderRequestCreateOrConnectWithoutOrderRequestDetailInput;

  @Field(() => OrderRequestWhereUniqueInput, { nullable: true })
  connect?: OrderRequestWhereUniqueInput;
}
