import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderRequestDetailCountAggregate } from './order-request-detail-count-aggregate.output';
import { OrderRequestDetailAvgAggregate } from './order-request-detail-avg-aggregate.output';
import { OrderRequestDetailSumAggregate } from './order-request-detail-sum-aggregate.output';
import { OrderRequestDetailMinAggregate } from './order-request-detail-min-aggregate.output';
import { OrderRequestDetailMaxAggregate } from './order-request-detail-max-aggregate.output';

@ObjectType()
export class AggregateOrderRequestDetail {

    @Field(() => OrderRequestDetailCountAggregate, {nullable:true})
    _count?: OrderRequestDetailCountAggregate;

    @Field(() => OrderRequestDetailAvgAggregate, {nullable:true})
    _avg?: OrderRequestDetailAvgAggregate;

    @Field(() => OrderRequestDetailSumAggregate, {nullable:true})
    _sum?: OrderRequestDetailSumAggregate;

    @Field(() => OrderRequestDetailMinAggregate, {nullable:true})
    _min?: OrderRequestDetailMinAggregate;

    @Field(() => OrderRequestDetailMaxAggregate, {nullable:true})
    _max?: OrderRequestDetailMaxAggregate;
}
