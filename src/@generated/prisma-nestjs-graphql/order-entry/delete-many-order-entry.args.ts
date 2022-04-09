import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryWhereInput } from './order-entry-where.input';

@ArgsType()
export class DeleteManyOrderEntryArgs {
  @Field(() => OrderEntryWhereInput, { nullable: true })
  where?: OrderEntryWhereInput;
}
