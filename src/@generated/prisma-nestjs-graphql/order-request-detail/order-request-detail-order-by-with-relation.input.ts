import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { OrderRequestOrderByWithRelationInput } from '../order-request/order-request-order-by-with-relation.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';

@InputType()
export class OrderRequestDetailOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  prodCd?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  orderQuantity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ssp?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cbm?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  wasOrderAlerted?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  OrderRequestId?: keyof typeof SortOrder;

  @Field(() => OrderRequestOrderByWithRelationInput, { nullable: true })
  orderRequest?: OrderRequestOrderByWithRelationInput;

  @Field(() => ProductOrderByWithRelationInput, { nullable: true })
  product?: ProductOrderByWithRelationInput;
}
