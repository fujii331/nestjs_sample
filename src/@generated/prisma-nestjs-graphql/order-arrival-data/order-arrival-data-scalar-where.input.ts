import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumDeliveryPortFilter } from '../prisma/enum-delivery-port-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderArrivalDataScalarWhereInput {
  @Field(() => [OrderArrivalDataScalarWhereInput], { nullable: true })
  AND?: Array<OrderArrivalDataScalarWhereInput>;

  @Field(() => [OrderArrivalDataScalarWhereInput], { nullable: true })
  OR?: Array<OrderArrivalDataScalarWhereInput>;

  @Field(() => [OrderArrivalDataScalarWhereInput], { nullable: true })
  NOT?: Array<OrderArrivalDataScalarWhereInput>;

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
}
