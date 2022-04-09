import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { OrderArrivalDataCreateInput } from './order-arrival-data-create.input';
import { OrderArrivalDataUpdateInput } from './order-arrival-data-update.input';

@ArgsType()
export class UpsertOneOrderArrivalDataArgs {
  @Field(() => OrderArrivalDataWhereUniqueInput, { nullable: false })
  where!: OrderArrivalDataWhereUniqueInput;

  @Field(() => OrderArrivalDataCreateInput, { nullable: false })
  create!: OrderArrivalDataCreateInput;

  @Field(() => OrderArrivalDataUpdateInput, { nullable: false })
  update!: OrderArrivalDataUpdateInput;
}
