import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataUpdateManyMutationInput } from './order-arrival-data-update-many-mutation.input';
import { OrderArrivalDataWhereInput } from './order-arrival-data-where.input';

@ArgsType()
export class UpdateManyOrderArrivalDataArgs {
  @Field(() => OrderArrivalDataUpdateManyMutationInput, { nullable: false })
  data!: OrderArrivalDataUpdateManyMutationInput;

  @Field(() => OrderArrivalDataWhereInput, { nullable: true })
  where?: OrderArrivalDataWhereInput;
}
