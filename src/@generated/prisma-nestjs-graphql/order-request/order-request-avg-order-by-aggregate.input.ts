import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderRequestAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  containerNo?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  OrderEntryId?: keyof typeof SortOrder;
}
