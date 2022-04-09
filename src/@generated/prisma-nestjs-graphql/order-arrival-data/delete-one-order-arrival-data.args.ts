import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';

@ArgsType()
export class DeleteOneOrderArrivalDataArgs {
  @Field(() => OrderArrivalDataWhereUniqueInput, { nullable: false })
  where!: OrderArrivalDataWhereUniqueInput;
}
