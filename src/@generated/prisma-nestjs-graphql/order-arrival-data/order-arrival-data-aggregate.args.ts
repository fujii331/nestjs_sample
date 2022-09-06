import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataWhereInput } from './order-arrival-data-where.input';
import { Type } from 'class-transformer';
import { OrderArrivalDataOrderByWithRelationInput } from './order-arrival-data-order-by-with-relation.input';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderArrivalDataCountAggregateInput } from './order-arrival-data-count-aggregate.input';
import { OrderArrivalDataAvgAggregateInput } from './order-arrival-data-avg-aggregate.input';
import { OrderArrivalDataSumAggregateInput } from './order-arrival-data-sum-aggregate.input';
import { OrderArrivalDataMinAggregateInput } from './order-arrival-data-min-aggregate.input';
import { OrderArrivalDataMaxAggregateInput } from './order-arrival-data-max-aggregate.input';

@ArgsType()
export class OrderArrivalDataAggregateArgs {

    @Field(() => OrderArrivalDataWhereInput, {nullable:true})
    @Type(() => OrderArrivalDataWhereInput)
    where?: OrderArrivalDataWhereInput;

    @Field(() => [OrderArrivalDataOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderArrivalDataOrderByWithRelationInput>;

    @Field(() => OrderArrivalDataWhereUniqueInput, {nullable:true})
    cursor?: OrderArrivalDataWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderArrivalDataCountAggregateInput, {nullable:true})
    _count?: OrderArrivalDataCountAggregateInput;

    @Field(() => OrderArrivalDataAvgAggregateInput, {nullable:true})
    _avg?: OrderArrivalDataAvgAggregateInput;

    @Field(() => OrderArrivalDataSumAggregateInput, {nullable:true})
    _sum?: OrderArrivalDataSumAggregateInput;

    @Field(() => OrderArrivalDataMinAggregateInput, {nullable:true})
    _min?: OrderArrivalDataMinAggregateInput;

    @Field(() => OrderArrivalDataMaxAggregateInput, {nullable:true})
    _max?: OrderArrivalDataMaxAggregateInput;
}
