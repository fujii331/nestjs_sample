import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailWhereInput } from './order-request-detail-where.input';

@ArgsType()
export class DeleteManyOrderRequestDetailArgs {
  @Field(() => OrderRequestDetailWhereInput, { nullable: true })
  where?: OrderRequestDetailWhereInput;
}
