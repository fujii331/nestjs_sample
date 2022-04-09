import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { OrderArrivalDataCreateWithoutProductInput } from './order-arrival-data-create-without-product.input';

@InputType()
export class OrderArrivalDataCreateOrConnectWithoutProductInput {
  @Field(() => OrderArrivalDataWhereUniqueInput, { nullable: false })
  where!: OrderArrivalDataWhereUniqueInput;

  @Field(() => OrderArrivalDataCreateWithoutProductInput, { nullable: false })
  create!: OrderArrivalDataCreateWithoutProductInput;
}
