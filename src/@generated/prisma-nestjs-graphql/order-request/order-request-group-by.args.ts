import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestWhereInput } from './order-request-where.input';
import { Type } from 'class-transformer';
import { OrderRequestOrderByWithAggregationInput } from './order-request-order-by-with-aggregation.input';
import { OrderRequestScalarFieldEnum } from './order-request-scalar-field.enum';
import { OrderRequestScalarWhereWithAggregatesInput } from './order-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OrderRequestCountAggregateInput } from './order-request-count-aggregate.input';
import { OrderRequestAvgAggregateInput } from './order-request-avg-aggregate.input';
import { OrderRequestSumAggregateInput } from './order-request-sum-aggregate.input';
import { OrderRequestMinAggregateInput } from './order-request-min-aggregate.input';
import { OrderRequestMaxAggregateInput } from './order-request-max-aggregate.input';

@ArgsType()
export class OrderRequestGroupByArgs {

    @Field(() => OrderRequestWhereInput, {nullable:true})
    @Type(() => OrderRequestWhereInput)
    where?: OrderRequestWhereInput;

    @Field(() => [OrderRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderRequestOrderByWithAggregationInput>;

    @Field(() => [OrderRequestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrderRequestScalarFieldEnum>;

    @Field(() => OrderRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: OrderRequestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderRequestCountAggregateInput, {nullable:true})
    _count?: OrderRequestCountAggregateInput;

    @Field(() => OrderRequestAvgAggregateInput, {nullable:true})
    _avg?: OrderRequestAvgAggregateInput;

    @Field(() => OrderRequestSumAggregateInput, {nullable:true})
    _sum?: OrderRequestSumAggregateInput;

    @Field(() => OrderRequestMinAggregateInput, {nullable:true})
    _min?: OrderRequestMinAggregateInput;

    @Field(() => OrderRequestMaxAggregateInput, {nullable:true})
    _max?: OrderRequestMaxAggregateInput;
}
