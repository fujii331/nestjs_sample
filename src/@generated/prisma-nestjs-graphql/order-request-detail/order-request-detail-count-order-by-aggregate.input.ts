import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderRequestDetailCountOrderByAggregateInput {
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
  orderRequestId?: keyof typeof SortOrder;
}
