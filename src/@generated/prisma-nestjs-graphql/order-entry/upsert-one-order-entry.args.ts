import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { OrderEntryCreateInput } from './order-entry-create.input';
import { OrderEntryUpdateInput } from './order-entry-update.input';

@ArgsType()
export class UpsertOneOrderEntryArgs {
  @Field(() => OrderEntryWhereUniqueInput, { nullable: false })
  where!: OrderEntryWhereUniqueInput;

  @Field(() => OrderEntryCreateInput, { nullable: false })
  create!: OrderEntryCreateInput;

  @Field(() => OrderEntryUpdateInput, { nullable: false })
  update!: OrderEntryUpdateInput;
}
