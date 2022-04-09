import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailUpdateInput } from './order-request-detail-update.input';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';

@ArgsType()
export class UpdateOneOrderRequestDetailArgs {
  @Field(() => OrderRequestDetailUpdateInput, { nullable: false })
  data!: OrderRequestDetailUpdateInput;

  @Field(() => OrderRequestDetailWhereUniqueInput, { nullable: false })
  where!: OrderRequestDetailWhereUniqueInput;
}
