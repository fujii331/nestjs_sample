import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { OrderArrivalDataCountOrderByAggregateInput } from './order-arrival-data-count-order-by-aggregate.input';
import { OrderArrivalDataAvgOrderByAggregateInput } from './order-arrival-data-avg-order-by-aggregate.input';
import { OrderArrivalDataMaxOrderByAggregateInput } from './order-arrival-data-max-order-by-aggregate.input';
import { OrderArrivalDataMinOrderByAggregateInput } from './order-arrival-data-min-order-by-aggregate.input';
import { OrderArrivalDataSumOrderByAggregateInput } from './order-arrival-data-sum-order-by-aggregate.input';

@InputType()
export class OrderArrivalDataOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  prodCd?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  orderQuantity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deliveryDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deliveryPort?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => OrderArrivalDataCountOrderByAggregateInput, { nullable: true })
  _count?: OrderArrivalDataCountOrderByAggregateInput;

  @Field(() => OrderArrivalDataAvgOrderByAggregateInput, { nullable: true })
  _avg?: OrderArrivalDataAvgOrderByAggregateInput;

  @Field(() => OrderArrivalDataMaxOrderByAggregateInput, { nullable: true })
  _max?: OrderArrivalDataMaxOrderByAggregateInput;

  @Field(() => OrderArrivalDataMinOrderByAggregateInput, { nullable: true })
  _min?: OrderArrivalDataMinOrderByAggregateInput;

  @Field(() => OrderArrivalDataSumOrderByAggregateInput, { nullable: true })
  _sum?: OrderArrivalDataSumOrderByAggregateInput;
}
