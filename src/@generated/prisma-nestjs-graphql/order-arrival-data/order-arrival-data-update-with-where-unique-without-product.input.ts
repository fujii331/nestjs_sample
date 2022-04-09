import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { OrderArrivalDataUpdateWithoutProductInput } from './order-arrival-data-update-without-product.input';

@InputType()
export class OrderArrivalDataUpdateWithWhereUniqueWithoutProductInput {
  @Field(() => OrderArrivalDataWhereUniqueInput, { nullable: false })
  where!: OrderArrivalDataWhereUniqueInput;

  @Field(() => OrderArrivalDataUpdateWithoutProductInput, { nullable: false })
  data!: OrderArrivalDataUpdateWithoutProductInput;
}
