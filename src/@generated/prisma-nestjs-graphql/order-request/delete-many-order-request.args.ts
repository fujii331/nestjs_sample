import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestWhereInput } from './order-request-where.input';

@ArgsType()
export class DeleteManyOrderRequestArgs {
  @Field(() => OrderRequestWhereInput, { nullable: true })
  where?: OrderRequestWhereInput;
}
