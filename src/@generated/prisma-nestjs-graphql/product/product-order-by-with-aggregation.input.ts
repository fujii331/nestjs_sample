import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ProductCountOrderByAggregateInput } from './product-count-order-by-aggregate.input';
import { ProductAvgOrderByAggregateInput } from './product-avg-order-by-aggregate.input';
import { ProductMaxOrderByAggregateInput } from './product-max-order-by-aggregate.input';
import { ProductMinOrderByAggregateInput } from './product-min-order-by-aggregate.input';
import { ProductSumOrderByAggregateInput } from './product-sum-order-by-aggregate.input';

@InputType()
export class ProductOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  prodCd?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  prodName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ssp180Days?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  carton3SideSize?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  minOrderQuantity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isValid?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => ProductCountOrderByAggregateInput, { nullable: true })
  _count?: ProductCountOrderByAggregateInput;

  @Field(() => ProductAvgOrderByAggregateInput, { nullable: true })
  _avg?: ProductAvgOrderByAggregateInput;

  @Field(() => ProductMaxOrderByAggregateInput, { nullable: true })
  _max?: ProductMaxOrderByAggregateInput;

  @Field(() => ProductMinOrderByAggregateInput, { nullable: true })
  _min?: ProductMinOrderByAggregateInput;

  @Field(() => ProductSumOrderByAggregateInput, { nullable: true })
  _sum?: ProductSumOrderByAggregateInput;
}
