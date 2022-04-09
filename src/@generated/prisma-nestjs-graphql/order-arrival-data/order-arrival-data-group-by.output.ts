import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeliveryPort } from '../prisma/delivery-port.enum';
import { HideField } from '@nestjs/graphql';
import { OrderArrivalDataCountAggregate } from './order-arrival-data-count-aggregate.output';
import { OrderArrivalDataAvgAggregate } from './order-arrival-data-avg-aggregate.output';
import { OrderArrivalDataSumAggregate } from './order-arrival-data-sum-aggregate.output';
import { OrderArrivalDataMinAggregate } from './order-arrival-data-min-aggregate.output';
import { OrderArrivalDataMaxAggregate } from './order-arrival-data-max-aggregate.output';

@ObjectType()
export class OrderArrivalDataGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  prodCd!: string;

  @Field(() => Int, { nullable: false })
  orderQuantity!: number;

  @Field(() => Date, { nullable: true })
  deliveryDate?: Date | string;

  @Field(() => DeliveryPort, { nullable: false })
  deliveryPort!: keyof typeof DeliveryPort;

  @HideField()
  createdAt!: Date | string;

  @HideField()
  updatedAt!: Date | string;

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
