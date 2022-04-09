import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumOrderRequest_deliveryPortWithAggregatesFilter } from '../prisma/enum-order-request-delivery-port-with-aggregates-filter.input';
import { EnumPoStatusWithAggregatesFilter } from '../prisma/enum-po-status-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderRequestScalarWhereWithAggregatesInput {
  @Field(() => [OrderRequestScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<OrderRequestScalarWhereWithAggregatesInput>;

  @Field(() => [OrderRequestScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<OrderRequestScalarWhereWithAggregatesInput>;

  @Field(() => [OrderRequestScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<OrderRequestScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  containerNo?: IntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  orderRequestNo?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deliveryDate?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  poRequestDate?: DateTimeWithAggregatesFilter;

  @Field(() => EnumOrderRequest_deliveryPortWithAggregatesFilter, {
    nullable: true,
  })
  deliveryPort?: EnumOrderRequest_deliveryPortWithAggregatesFilter;

  @Field(() => EnumPoStatusWithAggregatesFilter, { nullable: true })
  poStatus?: EnumPoStatusWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  discarded?: BoolWithAggregatesFilter;

  @HideField()
  createdAt?: DateTimeWithAggregatesFilter;

  @HideField()
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  OrderEntryId?: IntWithAggregatesFilter;
}
