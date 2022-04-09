import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Maker } from '../maker/maker.model';
import { OrderRequest } from '../order-request/order-request.model';
import { OrderEntryCount } from './order-entry-count.output';

@ObjectType()
export class OrderEntry {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  makerCd!: string;

  @HideField()
  createdAt!: Date;

  @HideField()
  updatedAt!: Date;

  @Field(() => Maker, { nullable: false })
  maker?: Maker;

  @Field(() => [OrderRequest], { nullable: true })
  OrderRequest?: Array<OrderRequest>;

  @Field(() => OrderEntryCount, { nullable: false })
  _count?: OrderEntryCount;
}
