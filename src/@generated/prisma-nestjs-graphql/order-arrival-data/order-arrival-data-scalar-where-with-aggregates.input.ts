import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumDeliveryPortWithAggregatesFilter } from '../prisma/enum-delivery-port-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderArrivalDataScalarWhereWithAggregatesInput {
  @Field(() => [OrderArrivalDataScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<OrderArrivalDataScalarWhereWithAggregatesInput>;

  @Field(() => [OrderArrivalDataScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<OrderArrivalDataScalarWhereWithAggregatesInput>;

  @Field(() => [OrderArrivalDataScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<OrderArrivalDataScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  prodCd?: StringWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  orderQuantity?: IntWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  deliveryDate?: DateTimeNullableWithAggregatesFilter;

  @Field(() => EnumDeliveryPortWithAggregatesFilter, { nullable: true })
  deliveryPort?: EnumDeliveryPortWithAggregatesFilter;

  @HideField()
  createdAt?: DateTimeWithAggregatesFilter;

  @HideField()
  updatedAt?: DateTimeWithAggregatesFilter;
}
