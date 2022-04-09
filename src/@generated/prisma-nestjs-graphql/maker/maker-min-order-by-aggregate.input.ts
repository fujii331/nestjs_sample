import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MakerMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  makerCd?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  makerName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  leadtime?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isValid?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;
}
