import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryCreateWithoutOrderRequestInput } from './order-entry-create-without-order-request.input';
import { OrderEntryCreateOrConnectWithoutOrderRequestInput } from './order-entry-create-or-connect-without-order-request.input';
import { OrderEntryUpsertWithoutOrderRequestInput } from './order-entry-upsert-without-order-request.input';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { OrderEntryUpdateWithoutOrderRequestInput } from './order-entry-update-without-order-request.input';

@InputType()
export class OrderEntryUpdateOneRequiredWithoutOrderRequestInput {
  @Field(() => OrderEntryCreateWithoutOrderRequestInput, { nullable: true })
  create?: OrderEntryCreateWithoutOrderRequestInput;

  @Field(() => OrderEntryCreateOrConnectWithoutOrderRequestInput, {
    nullable: true,
  })
  connectOrCreate?: OrderEntryCreateOrConnectWithoutOrderRequestInput;

  @Field(() => OrderEntryUpsertWithoutOrderRequestInput, { nullable: true })
  upsert?: OrderEntryUpsertWithoutOrderRequestInput;

  @Field(() => OrderEntryWhereUniqueInput, { nullable: true })
  connect?: OrderEntryWhereUniqueInput;

  @Field(() => OrderEntryUpdateWithoutOrderRequestInput, { nullable: true })
  update?: OrderEntryUpdateWithoutOrderRequestInput;
}
