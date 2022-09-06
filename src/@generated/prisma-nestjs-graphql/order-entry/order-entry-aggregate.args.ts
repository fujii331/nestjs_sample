import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryWhereInput } from './order-entry-where.input';
import { Type } from 'class-transformer';
import { OrderEntryOrderByWithRelationInput } from './order-entry-order-by-with-relation.input';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderEntryCountAggregateInput } from './order-entry-count-aggregate.input';
import { OrderEntryAvgAggregateInput } from './order-entry-avg-aggregate.input';
import { OrderEntrySumAggregateInput } from './order-entry-sum-aggregate.input';
import { OrderEntryMinAggregateInput } from './order-entry-min-aggregate.input';
import { OrderEntryMaxAggregateInput } from './order-entry-max-aggregate.input';

@ArgsType()
export class OrderEntryAggregateArgs {

    @Field(() => OrderEntryWhereInput, {nullable:true})
    @Type(() => OrderEntryWhereInput)
    where?: OrderEntryWhereInput;

    @Field(() => [OrderEntryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderEntryOrderByWithRelationInput>;

    @Field(() => OrderEntryWhereUniqueInput, {nullable:true})
    cursor?: OrderEntryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderEntryCountAggregateInput, {nullable:true})
    _count?: OrderEntryCountAggregateInput;

    @Field(() => OrderEntryAvgAggregateInput, {nullable:true})
    _avg?: OrderEntryAvgAggregateInput;

    @Field(() => OrderEntrySumAggregateInput, {nullable:true})
    _sum?: OrderEntrySumAggregateInput;

    @Field(() => OrderEntryMinAggregateInput, {nullable:true})
    _min?: OrderEntryMinAggregateInput;

    @Field(() => OrderEntryMaxAggregateInput, {nullable:true})
    _max?: OrderEntryMaxAggregateInput;
}
