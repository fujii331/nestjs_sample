import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { OrderRequestDetailCreateInput } from './order-request-detail-create.input';
import { OrderRequestDetailUpdateInput } from './order-request-detail-update.input';

@ArgsType()
export class UpsertOneOrderRequestDetailArgs {
  @Field(() => OrderRequestDetailWhereUniqueInput, { nullable: false })
  where!: OrderRequestDetailWhereUniqueInput;

  @Field(() => OrderRequestDetailCreateInput, { nullable: false })
  create!: OrderRequestDetailCreateInput;

  @Field(() => OrderRequestDetailUpdateInput, { nullable: false })
  update!: OrderRequestDetailUpdateInput;
}
