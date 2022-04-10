import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { OrderRequest } from '../order-request/order-request.model';
import { Product } from '../product/product.model';

@ObjectType()
export class OrderRequestDetail {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  prodCd!: string;

  @Field(() => Int, { nullable: false })
  orderQuantity!: number;

  @Field(() => Float, { nullable: true })
  ssp!: number | null;

  @Field(() => Float, { nullable: true })
  cbm!: number | null;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  wasOrderAlerted!: boolean;

  @HideField()
  createdAt!: Date;

  @HideField()
  updatedAt!: Date;

  @Field(() => Int, { nullable: false })
  orderRequestId!: number;

  @Field(() => OrderRequest, { nullable: false })
  orderRequest?: OrderRequest;

  @Field(() => Product, { nullable: false })
  product?: Product;
}
