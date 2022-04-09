import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OrderRequest_deliveryPort } from './order-request-delivery-port.enum';
import { PoStatus } from '../prisma/po-status.enum';
import { HideField } from '@nestjs/graphql';
import { OrderRequestCountAggregate } from './order-request-count-aggregate.output';
import { OrderRequestAvgAggregate } from './order-request-avg-aggregate.output';
import { OrderRequestSumAggregate } from './order-request-sum-aggregate.output';
import { OrderRequestMinAggregate } from './order-request-min-aggregate.output';
import { OrderRequestMaxAggregate } from './order-request-max-aggregate.output';

@ObjectType()
export class OrderRequestGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  containerNo!: number;

  @Field(() => String, { nullable: false })
  orderRequestNo!: string;

  @Field(() => Date, { nullable: false })
  deliveryDate!: Date | string;

  @Field(() => Date, { nullable: false })
  poRequestDate!: Date | string;

  @Field(() => OrderRequest_deliveryPort, { nullable: false })
  deliveryPort!: keyof typeof OrderRequest_deliveryPort;

  @Field(() => PoStatus, { nullable: false })
  poStatus!: keyof typeof PoStatus;

  @Field(() => Boolean, { nullable: false })
  discarded!: boolean;

  @HideField()
  createdAt!: Date | string;

  @HideField()
  updatedAt!: Date | string;

  @Field(() => Int, { nullable: false })
  OrderEntryId!: number;

  @Field(() => OrderRequestCountAggregate, { nullable: true })
  _count?: OrderRequestCountAggregate;

  @Field(() => OrderRequestAvgAggregate, { nullable: true })
  _avg?: OrderRequestAvgAggregate;

  @Field(() => OrderRequestSumAggregate, { nullable: true })
  _sum?: OrderRequestSumAggregate;

  @Field(() => OrderRequestMinAggregate, { nullable: true })
  _min?: OrderRequestMinAggregate;

  @Field(() => OrderRequestMaxAggregate, { nullable: true })
  _max?: OrderRequestMaxAggregate;
}
