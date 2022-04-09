import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';

@ArgsType()
export class FindUniqueOrderEntryArgs {
  @Field(() => OrderEntryWhereUniqueInput, { nullable: false })
  where!: OrderEntryWhereUniqueInput;
}
