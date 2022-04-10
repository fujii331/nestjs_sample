import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { OrderEntryOrderByWithRelationInput } from '../order-entry/order-entry-order-by-with-relation.input';
import { OrderRequestDetailOrderByRelationAggregateInput } from '../order-request-detail/order-request-detail-order-by-relation-aggregate.input';

@InputType()
export class OrderRequestOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  containerNo?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  orderRequestNo?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deliveryDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  poRequestDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deliveryPort?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  poStatus?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  discarded?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  orderEntryId?: keyof typeof SortOrder;

  @Field(() => OrderEntryOrderByWithRelationInput, { nullable: true })
  orderEntry?: OrderEntryOrderByWithRelationInput;

  @Field(() => OrderRequestDetailOrderByRelationAggregateInput, {
    nullable: true,
  })
  orderRequestDetail?: OrderRequestDetailOrderByRelationAggregateInput;
}
