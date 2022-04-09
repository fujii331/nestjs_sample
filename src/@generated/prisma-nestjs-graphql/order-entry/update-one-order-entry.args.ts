import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryUpdateInput } from './order-entry-update.input';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';

@ArgsType()
export class UpdateOneOrderEntryArgs {
  @Field(() => OrderEntryUpdateInput, { nullable: false })
  data!: OrderEntryUpdateInput;

  @Field(() => OrderEntryWhereUniqueInput, { nullable: false })
  where!: OrderEntryWhereUniqueInput;
}
