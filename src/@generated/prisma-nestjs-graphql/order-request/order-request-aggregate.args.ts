import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestWhereInput } from './order-request-where.input';
import { Type } from 'class-transformer';
import { OrderRequestOrderByWithRelationInput } from './order-request-order-by-with-relation.input';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderRequestCountAggregateInput } from './order-request-count-aggregate.input';
import { OrderRequestAvgAggregateInput } from './order-request-avg-aggregate.input';
import { OrderRequestSumAggregateInput } from './order-request-sum-aggregate.input';
import { OrderRequestMinAggregateInput } from './order-request-min-aggregate.input';
import { OrderRequestMaxAggregateInput } from './order-request-max-aggregate.input';

@ArgsType()
export class OrderRequestAggregateArgs {

    @Field(() => OrderRequestWhereInput, {nullable:true})
    @Type(() => OrderRequestWhereInput)
    where?: OrderRequestWhereInput;

    @Field(() => [OrderRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderRequestOrderByWithRelationInput>;

    @Field(() => OrderRequestWhereUniqueInput, {nullable:true})
    cursor?: OrderRequestWhereUniqueInput;

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
