import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OrderRequest_deliveryPort } from './order-request-delivery-port.enum';
import { PoStatus } from '../prisma/po-status.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class OrderRequestMaxAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  containerNo?: number;

  @Field(() => String, { nullable: true })
  orderRequestNo?: string;

  @Field(() => Date, { nullable: true })
  deliveryDate?: Date | string;

  @Field(() => Date, { nullable: true })
  poRequestDate?: Date | string;

  @Field(() => OrderRequest_deliveryPort, { nullable: true })
  deliveryPort?: keyof typeof OrderRequest_deliveryPort;

  @Field(() => PoStatus, { nullable: true })
  poStatus?: keyof typeof PoStatus;

  @Field(() => Boolean, { nullable: true })
  discarded?: boolean;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => Int, { nullable: true })
  orderEntryId?: number;
}
