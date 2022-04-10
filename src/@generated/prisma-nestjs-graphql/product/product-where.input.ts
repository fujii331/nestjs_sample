import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { MakerRelationFilter } from '../maker/maker-relation-filter.input';
import { OrderArrivalDataListRelationFilter } from '../order-arrival-data/order-arrival-data-list-relation-filter.input';
import { OrderRequestDetailListRelationFilter } from '../order-request-detail/order-request-detail-list-relation-filter.input';

@InputType()
export class ProductWhereInput {
  @Field(() => [ProductWhereInput], { nullable: true })
  AND?: Array<ProductWhereInput>;

  @Field(() => [ProductWhereInput], { nullable: true })
  OR?: Array<ProductWhereInput>;

  @Field(() => [ProductWhereInput], { nullable: true })
  NOT?: Array<ProductWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  prodCd?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  makerCd?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  prodName?: StringFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  ssp180Days?: FloatNullableFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  carton3SideSize?: FloatNullableFilter;

  @Field(() => IntFilter, { nullable: true })
  minOrderQuantity?: IntFilter;

  @Field(() => BoolFilter, { nullable: true })
  isValid?: BoolFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;

  @Field(() => MakerRelationFilter, { nullable: true })
  maker?: MakerRelationFilter;

  @Field(() => OrderArrivalDataListRelationFilter, { nullable: true })
  orderArrivalData?: OrderArrivalDataListRelationFilter;

  @Field(() => OrderRequestDetailListRelationFilter, { nullable: true })
  orderRequestDetail?: OrderRequestDetailListRelationFilter;
}
