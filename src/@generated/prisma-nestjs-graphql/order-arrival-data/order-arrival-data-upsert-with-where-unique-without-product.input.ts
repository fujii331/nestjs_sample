import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { OrderArrivalDataUpdateWithoutProductInput } from './order-arrival-data-update-without-product.input';
import { OrderArrivalDataCreateWithoutProductInput } from './order-arrival-data-create-without-product.input';

@InputType()
export class OrderArrivalDataUpsertWithWhereUniqueWithoutProductInput {
  @Field(() => OrderArrivalDataWhereUniqueInput, { nullable: false })
  where!: OrderArrivalDataWhereUniqueInput;

  @Field(() => OrderArrivalDataUpdateWithoutProductInput, { nullable: false })
  update!: OrderArrivalDataUpdateWithoutProductInput;

  @Field(() => OrderArrivalDataCreateWithoutProductInput, { nullable: false })
  create!: OrderArrivalDataCreateWithoutProductInput;
}
