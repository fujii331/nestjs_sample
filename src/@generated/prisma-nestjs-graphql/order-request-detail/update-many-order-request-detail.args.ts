import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailUpdateManyMutationInput } from './order-request-detail-update-many-mutation.input';
import { OrderRequestDetailWhereInput } from './order-request-detail-where.input';

@ArgsType()
export class UpdateManyOrderRequestDetailArgs {
  @Field(() => OrderRequestDetailUpdateManyMutationInput, { nullable: false })
  data!: OrderRequestDetailUpdateManyMutationInput;

  @Field(() => OrderRequestDetailWhereInput, { nullable: true })
  where?: OrderRequestDetailWhereInput;
}
