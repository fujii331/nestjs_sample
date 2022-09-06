import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { OrderRequestDetailCountAggregate } from './order-request-detail-count-aggregate.output';
import { OrderRequestDetailAvgAggregate } from './order-request-detail-avg-aggregate.output';
import { OrderRequestDetailSumAggregate } from './order-request-detail-sum-aggregate.output';
import { OrderRequestDetailMinAggregate } from './order-request-detail-min-aggregate.output';
import { OrderRequestDetailMaxAggregate } from './order-request-detail-max-aggregate.output';

@ObjectType()
export class OrderRequestDetailGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    prodCd!: string;

    @Field(() => Int, {nullable:false})
    orderQuantity!: number;

    @Field(() => Float, {nullable:true})
    ssp?: number;

    @Field(() => Float, {nullable:true})
    cbm?: number;

    @Field(() => Boolean, {nullable:false})
    wasOrderAlerted!: boolean;

    @HideField()
    createdAt!: Date | string;

    @HideField()
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    orderRequestId!: number;

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
