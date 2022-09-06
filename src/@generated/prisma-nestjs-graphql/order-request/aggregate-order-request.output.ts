import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderRequestCountAggregate } from './order-request-count-aggregate.output';
import { OrderRequestAvgAggregate } from './order-request-avg-aggregate.output';
import { OrderRequestSumAggregate } from './order-request-sum-aggregate.output';
import { OrderRequestMinAggregate } from './order-request-min-aggregate.output';
import { OrderRequestMaxAggregate } from './order-request-max-aggregate.output';

@ObjectType()
export class AggregateOrderRequest {

    @Field(() => OrderRequestCountAggregate, {nullable:true})
    _count?: OrderRequestCountAggregate;

    @Field(() => OrderRequestAvgAggregate, {nullable:true})
    _avg?: OrderRequestAvgAggregate;

    @Field(() => OrderRequestSumAggregate, {nullable:true})
    _sum?: OrderRequestSumAggregate;

    @Field(() => OrderRequestMinAggregate, {nullable:true})
    _min?: OrderRequestMinAggregate;

    @Field(() => OrderRequestMaxAggregate, {nullable:true})
    _max?: OrderRequestMaxAggregate;
}
