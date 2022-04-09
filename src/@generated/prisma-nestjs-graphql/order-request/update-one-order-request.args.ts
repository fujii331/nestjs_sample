import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestUpdateInput } from './order-request-update.input';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';

@ArgsType()
export class UpdateOneOrderRequestArgs {
  @Field(() => OrderRequestUpdateInput, { nullable: false })
  data!: OrderRequestUpdateInput;

  @Field(() => OrderRequestWhereUniqueInput, { nullable: false })
  where!: OrderRequestWhereUniqueInput;
}
