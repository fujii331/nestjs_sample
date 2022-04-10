import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { OrderRequestCountOrderByAggregateInput } from './order-request-count-order-by-aggregate.input';
import { OrderRequestAvgOrderByAggregateInput } from './order-request-avg-order-by-aggregate.input';
import { OrderRequestMaxOrderByAggregateInput } from './order-request-max-order-by-aggregate.input';
import { OrderRequestMinOrderByAggregateInput } from './order-request-min-order-by-aggregate.input';
import { OrderRequestSumOrderByAggregateInput } from './order-request-sum-order-by-aggregate.input';

@InputType()
export class OrderRequestOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  containerNo?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  orderRequestNo?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deliveryDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  poRequestDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deliveryPort?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  poStatus?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  discarded?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  orderEntryId?: keyof typeof SortOrder;

  @Field(() => OrderRequestCountOrderByAggregateInput, { nullable: true })
  _count?: OrderRequestCountOrderByAggregateInput;

  @Field(() => OrderRequestAvgOrderByAggregateInput, { nullable: true })
  _avg?: OrderRequestAvgOrderByAggregateInput;

  @Field(() => OrderRequestMaxOrderByAggregateInput, { nullable: true })
  _max?: OrderRequestMaxOrderByAggregateInput;

  @Field(() => OrderRequestMinOrderByAggregateInput, { nullable: true })
  _min?: OrderRequestMinOrderByAggregateInput;

  @Field(() => OrderRequestSumOrderByAggregateInput, { nullable: true })
  _sum?: OrderRequestSumOrderByAggregateInput;
}
