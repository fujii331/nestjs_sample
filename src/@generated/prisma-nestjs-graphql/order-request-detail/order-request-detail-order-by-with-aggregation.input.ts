import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { OrderRequestDetailCountOrderByAggregateInput } from './order-request-detail-count-order-by-aggregate.input';
import { OrderRequestDetailAvgOrderByAggregateInput } from './order-request-detail-avg-order-by-aggregate.input';
import { OrderRequestDetailMaxOrderByAggregateInput } from './order-request-detail-max-order-by-aggregate.input';
import { OrderRequestDetailMinOrderByAggregateInput } from './order-request-detail-min-order-by-aggregate.input';
import { OrderRequestDetailSumOrderByAggregateInput } from './order-request-detail-sum-order-by-aggregate.input';

@InputType()
export class OrderRequestDetailOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    prodCd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderQuantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ssp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cbm?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wasOrderAlerted?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderRequestId?: keyof typeof SortOrder;

    @Field(() => OrderRequestDetailCountOrderByAggregateInput, {nullable:true})
    _count?: OrderRequestDetailCountOrderByAggregateInput;

    @Field(() => OrderRequestDetailAvgOrderByAggregateInput, {nullable:true})
    _avg?: OrderRequestDetailAvgOrderByAggregateInput;

    @Field(() => OrderRequestDetailMaxOrderByAggregateInput, {nullable:true})
    _max?: OrderRequestDetailMaxOrderByAggregateInput;

    @Field(() => OrderRequestDetailMinOrderByAggregateInput, {nullable:true})
    _min?: OrderRequestDetailMinOrderByAggregateInput;

    @Field(() => OrderRequestDetailSumOrderByAggregateInput, {nullable:true})
    _sum?: OrderRequestDetailSumOrderByAggregateInput;
}
