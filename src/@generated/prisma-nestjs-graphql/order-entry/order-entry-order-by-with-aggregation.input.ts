import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { OrderEntryCountOrderByAggregateInput } from './order-entry-count-order-by-aggregate.input';
import { OrderEntryAvgOrderByAggregateInput } from './order-entry-avg-order-by-aggregate.input';
import { OrderEntryMaxOrderByAggregateInput } from './order-entry-max-order-by-aggregate.input';
import { OrderEntryMinOrderByAggregateInput } from './order-entry-min-order-by-aggregate.input';
import { OrderEntrySumOrderByAggregateInput } from './order-entry-sum-order-by-aggregate.input';

@InputType()
export class OrderEntryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    makerCd?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => OrderEntryCountOrderByAggregateInput, {nullable:true})
    _count?: OrderEntryCountOrderByAggregateInput;

    @Field(() => OrderEntryAvgOrderByAggregateInput, {nullable:true})
    _avg?: OrderEntryAvgOrderByAggregateInput;

    @Field(() => OrderEntryMaxOrderByAggregateInput, {nullable:true})
    _max?: OrderEntryMaxOrderByAggregateInput;

    @Field(() => OrderEntryMinOrderByAggregateInput, {nullable:true})
    _min?: OrderEntryMinOrderByAggregateInput;

    @Field(() => OrderEntrySumOrderByAggregateInput, {nullable:true})
    _sum?: OrderEntrySumOrderByAggregateInput;
}
