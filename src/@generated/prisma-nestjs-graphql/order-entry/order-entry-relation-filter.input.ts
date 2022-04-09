import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryWhereInput } from './order-entry-where.input';

@InputType()
export class OrderEntryRelationFilter {
  @Field(() => OrderEntryWhereInput, { nullable: true })
  is?: OrderEntryWhereInput;

  @Field(() => OrderEntryWhereInput, { nullable: true })
  isNot?: OrderEntryWhereInput;
}
