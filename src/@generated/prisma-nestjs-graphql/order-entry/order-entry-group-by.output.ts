import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { OrderEntryCountAggregate } from './order-entry-count-aggregate.output';
import { OrderEntryAvgAggregate } from './order-entry-avg-aggregate.output';
import { OrderEntrySumAggregate } from './order-entry-sum-aggregate.output';
import { OrderEntryMinAggregate } from './order-entry-min-aggregate.output';
import { OrderEntryMaxAggregate } from './order-entry-max-aggregate.output';

@ObjectType()
export class OrderEntryGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  makerCd!: string;

  @HideField()
  createdAt!: Date | string;

  @HideField()
  updatedAt!: Date | string;

  @Field(() => OrderEntryCountAggregate, { nullable: true })
  _count?: OrderEntryCountAggregate;

  @Field(() => OrderEntryAvgAggregate, { nullable: true })
  _avg?: OrderEntryAvgAggregate;

  @Field(() => OrderEntrySumAggregate, { nullable: true })
  _sum?: OrderEntrySumAggregate;

  @Field(() => OrderEntryMinAggregate, { nullable: true })
  _min?: OrderEntryMinAggregate;

  @Field(() => OrderEntryMaxAggregate, { nullable: true })
  _max?: OrderEntryMaxAggregate;
}
