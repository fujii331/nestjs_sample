import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumOrderRequest_deliveryPortFilter } from '../prisma/enum-order-request-delivery-port-filter.input';
import { EnumPoStatusFilter } from '../prisma/enum-po-status-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderRequestScalarWhereInput {
  @Field(() => [OrderRequestScalarWhereInput], { nullable: true })
  AND?: Array<OrderRequestScalarWhereInput>;

  @Field(() => [OrderRequestScalarWhereInput], { nullable: true })
  OR?: Array<OrderRequestScalarWhereInput>;

  @Field(() => [OrderRequestScalarWhereInput], { nullable: true })
  NOT?: Array<OrderRequestScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  containerNo?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  orderRequestNo?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deliveryDate?: DateTimeFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  poRequestDate?: DateTimeNullableFilter;

  @Field(() => EnumOrderRequest_deliveryPortFilter, { nullable: true })
  deliveryPort?: EnumOrderRequest_deliveryPortFilter;

  @Field(() => EnumPoStatusFilter, { nullable: true })
  poStatus?: EnumPoStatusFilter;

  @Field(() => BoolFilter, { nullable: true })
  discarded?: BoolFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  orderEntryId?: IntFilter;
}
