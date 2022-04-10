import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { MakerOrderByWithRelationInput } from '../maker/maker-order-by-with-relation.input';
import { OrderArrivalDataOrderByRelationAggregateInput } from '../order-arrival-data/order-arrival-data-order-by-relation-aggregate.input';
import { OrderRequestDetailOrderByRelationAggregateInput } from '../order-request-detail/order-request-detail-order-by-relation-aggregate.input';

@InputType()
export class ProductOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  prodCd?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  makerCd?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  prodName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ssp180Days?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  carton3SideSize?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  minOrderQuantity?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isValid?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @HideField()
  updatedAt?: keyof typeof SortOrder;

  @Field(() => MakerOrderByWithRelationInput, { nullable: true })
  maker?: MakerOrderByWithRelationInput;

  @Field(() => OrderArrivalDataOrderByRelationAggregateInput, {
    nullable: true,
  })
  orderArrivalData?: OrderArrivalDataOrderByRelationAggregateInput;

  @Field(() => OrderRequestDetailOrderByRelationAggregateInput, {
    nullable: true,
  })
  orderRequestDetail?: OrderRequestDetailOrderByRelationAggregateInput;
}
