import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { MakerRelationFilter } from '../maker/maker-relation-filter.input';
import { OrderRequestListRelationFilter } from '../order-request/order-request-list-relation-filter.input';

@InputType()
export class OrderEntryWhereInput {
  @Field(() => [OrderEntryWhereInput], { nullable: true })
  AND?: Array<OrderEntryWhereInput>;

  @Field(() => [OrderEntryWhereInput], { nullable: true })
  OR?: Array<OrderEntryWhereInput>;

  @Field(() => [OrderEntryWhereInput], { nullable: true })
  NOT?: Array<OrderEntryWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  makerCd?: StringFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;

  @Field(() => MakerRelationFilter, { nullable: true })
  maker?: MakerRelationFilter;

  @Field(() => OrderRequestListRelationFilter, { nullable: true })
  OrderRequest?: OrderRequestListRelationFilter;
}
