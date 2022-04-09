import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataUpdateInput } from './order-arrival-data-update.input';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';

@ArgsType()
export class UpdateOneOrderArrivalDataArgs {
  @Field(() => OrderArrivalDataUpdateInput, { nullable: false })
  data!: OrderArrivalDataUpdateInput;

  @Field(() => OrderArrivalDataWhereUniqueInput, { nullable: false })
  where!: OrderArrivalDataWhereUniqueInput;
}
