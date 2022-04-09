import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataScalarWhereInput } from './order-arrival-data-scalar-where.input';
import { OrderArrivalDataUpdateManyMutationInput } from './order-arrival-data-update-many-mutation.input';

@InputType()
export class OrderArrivalDataUpdateManyWithWhereWithoutProductInput {
  @Field(() => OrderArrivalDataScalarWhereInput, { nullable: false })
  where!: OrderArrivalDataScalarWhereInput;

  @Field(() => OrderArrivalDataUpdateManyMutationInput, { nullable: false })
  data!: OrderArrivalDataUpdateManyMutationInput;
}
