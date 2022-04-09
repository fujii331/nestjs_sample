import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { OrderRequestCreateInput } from './order-request-create.input';
import { OrderRequestUpdateInput } from './order-request-update.input';

@ArgsType()
export class UpsertOneOrderRequestArgs {
  @Field(() => OrderRequestWhereUniqueInput, { nullable: false })
  where!: OrderRequestWhereUniqueInput;

  @Field(() => OrderRequestCreateInput, { nullable: false })
  create!: OrderRequestCreateInput;

  @Field(() => OrderRequestUpdateInput, { nullable: false })
  update!: OrderRequestUpdateInput;
}
