import { Field, InputType } from '@nestjs/graphql';
import { OrderEntryWhereUniqueInput } from '../../../src/@generated/prisma-nestjs-graphql/order-entry/order-entry-where-unique.input';

@InputType()
class OrderEntriesWhereInput {
  @Field(() => String, { nullable: true })
  makerCd?: string;

  @Field(() => String, { nullable: true })
  orderRequestNo?: string;

  @Field(() => String, { nullable: true })
  prodCd?: string;
}

@InputType()
export class OrderEntriesInput {
  @Field(() => OrderEntriesWhereInput, { nullable: true })
  orderEntriesWhereInput: OrderEntriesWhereInput;

  @Field(() => Number, { nullable: true })
  skip?: number;

  @Field(() => Number, { nullable: true })
  take?: number;

  @Field(() => OrderEntryWhereUniqueInput, { nullable: true })
  cursor?: OrderEntryWhereUniqueInput;
}
