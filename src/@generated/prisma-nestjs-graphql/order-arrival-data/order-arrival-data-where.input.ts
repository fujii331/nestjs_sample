import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumDeliveryPortFilter } from '../prisma/enum-delivery-port-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { ProductRelationFilter } from '../product/product-relation-filter.input';

@InputType()
export class OrderArrivalDataWhereInput {
  @Field(() => [OrderArrivalDataWhereInput], { nullable: true })
  AND?: Array<OrderArrivalDataWhereInput>;

  @Field(() => [OrderArrivalDataWhereInput], { nullable: true })
  OR?: Array<OrderArrivalDataWhereInput>;

  @Field(() => [OrderArrivalDataWhereInput], { nullable: true })
  NOT?: Array<OrderArrivalDataWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  prodCd?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  orderQuantity?: IntFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  deliveryDate?: DateTimeNullableFilter;

  @Field(() => EnumDeliveryPortFilter, { nullable: true })
  deliveryPort?: EnumDeliveryPortFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;

  @Field(() => ProductRelationFilter, { nullable: true })
  product?: ProductRelationFilter;
}
