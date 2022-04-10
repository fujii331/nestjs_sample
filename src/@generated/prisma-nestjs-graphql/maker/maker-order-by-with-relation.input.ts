import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { OrderEntryOrderByRelationAggregateInput } from '../order-entry/order-entry-order-by-relation-aggregate.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';

@InputType()
export class MakerOrderByWithRelationInput {
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

  @Field(() => OrderEntryOrderByRelationAggregateInput, { nullable: true })
  orderEntry?: OrderEntryOrderByRelationAggregateInput;

  @Field(() => ProductOrderByRelationAggregateInput, { nullable: true })
  product?: ProductOrderByRelationAggregateInput;
}
