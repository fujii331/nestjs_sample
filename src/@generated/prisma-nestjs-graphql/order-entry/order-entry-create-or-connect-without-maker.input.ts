import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { OrderEntryCreateWithoutMakerInput } from './order-entry-create-without-maker.input';

@InputType()
export class OrderEntryCreateOrConnectWithoutMakerInput {
  @Field(() => OrderEntryWhereUniqueInput, { nullable: false })
  where!: OrderEntryWhereUniqueInput;

  @Field(() => OrderEntryCreateWithoutMakerInput, { nullable: false })
  create!: OrderEntryCreateWithoutMakerInput;
}
