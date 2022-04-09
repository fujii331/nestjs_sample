import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataWhereInput } from './order-arrival-data-where.input';

@InputType()
export class OrderArrivalDataListRelationFilter {
  @Field(() => OrderArrivalDataWhereInput, { nullable: true })
  every?: OrderArrivalDataWhereInput;

  @Field(() => OrderArrivalDataWhereInput, { nullable: true })
  some?: OrderArrivalDataWhereInput;

  @Field(() => OrderArrivalDataWhereInput, { nullable: true })
  none?: OrderArrivalDataWhereInput;
}
