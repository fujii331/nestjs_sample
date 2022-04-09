import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderArrivalDataCountAggregate } from './order-arrival-data-count-aggregate.output';
import { OrderArrivalDataAvgAggregate } from './order-arrival-data-avg-aggregate.output';
import { OrderArrivalDataSumAggregate } from './order-arrival-data-sum-aggregate.output';
import { OrderArrivalDataMinAggregate } from './order-arrival-data-min-aggregate.output';
import { OrderArrivalDataMaxAggregate } from './order-arrival-data-max-aggregate.output';

@ObjectType()
export class AggregateOrderArrivalData {
  @Field(() => OrderArrivalDataCountAggregate, { nullable: true })
  _count?: OrderArrivalDataCountAggregate;

  @Field(() => OrderArrivalDataAvgAggregate, { nullable: true })
  _avg?: OrderArrivalDataAvgAggregate;

  @Field(() => OrderArrivalDataSumAggregate, { nullable: true })
  _sum?: OrderArrivalDataSumAggregate;

  @Field(() => OrderArrivalDataMinAggregate, { nullable: true })
  _min?: OrderArrivalDataMinAggregate;

  @Field(() => OrderArrivalDataMaxAggregate, { nullable: true })
  _max?: OrderArrivalDataMaxAggregate;
}
