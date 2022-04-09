import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { OrderRequestRelationFilter } from '../order-request/order-request-relation-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';

@InputType()
export class OrderRequestDetailWhereInput {
  @Field(() => [OrderRequestDetailWhereInput], { nullable: true })
  AND?: Array<OrderRequestDetailWhereInput>;

  @Field(() => [OrderRequestDetailWhereInput], { nullable: true })
  OR?: Array<OrderRequestDetailWhereInput>;

  @Field(() => [OrderRequestDetailWhereInput], { nullable: true })
  NOT?: Array<OrderRequestDetailWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  prodCd?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  orderQuantity?: IntFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  ssp?: FloatNullableFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  cbm?: FloatNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  wasOrderAlerted?: BoolFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  OrderRequestId?: IntFilter;

  @Field(() => OrderRequestRelationFilter, { nullable: true })
  orderRequest?: OrderRequestRelationFilter;

  @Field(() => ProductRelationFilter, { nullable: true })
  product?: ProductRelationFilter;
}
