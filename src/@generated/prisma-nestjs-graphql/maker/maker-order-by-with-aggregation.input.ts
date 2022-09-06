import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { MakerCountOrderByAggregateInput } from './maker-count-order-by-aggregate.input';
import { MakerAvgOrderByAggregateInput } from './maker-avg-order-by-aggregate.input';
import { MakerMaxOrderByAggregateInput } from './maker-max-order-by-aggregate.input';
import { MakerMinOrderByAggregateInput } from './maker-min-order-by-aggregate.input';
import { MakerSumOrderByAggregateInput } from './maker-sum-order-by-aggregate.input';

@InputType()
export class MakerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    makerCd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    makerName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    leadtime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isValid?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MakerCountOrderByAggregateInput, {nullable:true})
    _count?: MakerCountOrderByAggregateInput;

    @Field(() => MakerAvgOrderByAggregateInput, {nullable:true})
    _avg?: MakerAvgOrderByAggregateInput;

    @Field(() => MakerMaxOrderByAggregateInput, {nullable:true})
    _max?: MakerMaxOrderByAggregateInput;

    @Field(() => MakerMinOrderByAggregateInput, {nullable:true})
    _min?: MakerMinOrderByAggregateInput;

    @Field(() => MakerSumOrderByAggregateInput, {nullable:true})
    _sum?: MakerSumOrderByAggregateInput;
}
