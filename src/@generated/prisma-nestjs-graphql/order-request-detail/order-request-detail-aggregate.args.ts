import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailWhereInput } from './order-request-detail-where.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailOrderByWithRelationInput } from './order-request-detail-order-by-with-relation.input';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderRequestDetailCountAggregateInput } from './order-request-detail-count-aggregate.input';
import { OrderRequestDetailAvgAggregateInput } from './order-request-detail-avg-aggregate.input';
import { OrderRequestDetailSumAggregateInput } from './order-request-detail-sum-aggregate.input';
import { OrderRequestDetailMinAggregateInput } from './order-request-detail-min-aggregate.input';
import { OrderRequestDetailMaxAggregateInput } from './order-request-detail-max-aggregate.input';

@ArgsType()
export class OrderRequestDetailAggregateArgs {

    @Field(() => OrderRequestDetailWhereInput, {nullable:true})
    @Type(() => OrderRequestDetailWhereInput)
    where?: OrderRequestDetailWhereInput;

    @Field(() => [OrderRequestDetailOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderRequestDetailOrderByWithRelationInput>;

    @Field(() => OrderRequestDetailWhereUniqueInput, {nullable:true})
    cursor?: OrderRequestDetailWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderRequestDetailCountAggregateInput, {nullable:true})
    _count?: OrderRequestDetailCountAggregateInput;

    @Field(() => OrderRequestDetailAvgAggregateInput, {nullable:true})
    _avg?: OrderRequestDetailAvgAggregateInput;

    @Field(() => OrderRequestDetailSumAggregateInput, {nullable:true})
    _sum?: OrderRequestDetailSumAggregateInput;

    @Field(() => OrderRequestDetailMinAggregateInput, {nullable:true})
    _min?: OrderRequestDetailMinAggregateInput;

    @Field(() => OrderRequestDetailMaxAggregateInput, {nullable:true})
    _max?: OrderRequestDetailMaxAggregateInput;
}
