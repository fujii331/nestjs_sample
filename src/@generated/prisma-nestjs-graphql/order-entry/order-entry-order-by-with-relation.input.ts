import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { MakerOrderByWithRelationInput } from '../maker/maker-order-by-with-relation.input';
import { OrderRequestOrderByRelationAggregateInput } from '../order-request/order-request-order-by-relation-aggregate.input';

@InputType()
export class OrderEntryOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  makerCd?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => MakerOrderByWithRelationInput, { nullable: true })
  maker?: MakerOrderByWithRelationInput;

  @Field(() => OrderRequestOrderByRelationAggregateInput, { nullable: true })
  orderRequest?: OrderRequestOrderByRelationAggregateInput;
}
