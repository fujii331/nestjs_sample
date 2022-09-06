import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataWhereInput } from './order-arrival-data-where.input';
import { Type } from 'class-transformer';
import { OrderArrivalDataOrderByWithAggregationInput } from './order-arrival-data-order-by-with-aggregation.input';
import { OrderArrivalDataScalarFieldEnum } from './order-arrival-data-scalar-field.enum';
import { OrderArrivalDataScalarWhereWithAggregatesInput } from './order-arrival-data-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OrderArrivalDataCountAggregateInput } from './order-arrival-data-count-aggregate.input';
import { OrderArrivalDataAvgAggregateInput } from './order-arrival-data-avg-aggregate.input';
import { OrderArrivalDataSumAggregateInput } from './order-arrival-data-sum-aggregate.input';
import { OrderArrivalDataMinAggregateInput } from './order-arrival-data-min-aggregate.input';
import { OrderArrivalDataMaxAggregateInput } from './order-arrival-data-max-aggregate.input';

@ArgsType()
export class OrderArrivalDataGroupByArgs {

    @Field(() => OrderArrivalDataWhereInput, {nullable:true})
    @Type(() => OrderArrivalDataWhereInput)
    where?: OrderArrivalDataWhereInput;

    @Field(() => [OrderArrivalDataOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderArrivalDataOrderByWithAggregationInput>;

    @Field(() => [OrderArrivalDataScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrderArrivalDataScalarFieldEnum>;

    @Field(() => OrderArrivalDataScalarWhereWithAggregatesInput, {nullable:true})
    having?: OrderArrivalDataScalarWhereWithAggregatesInput;

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
