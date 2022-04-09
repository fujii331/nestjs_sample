import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';

@ArgsType()
export class FindUniqueOrderRequestArgs {
  @Field(() => OrderRequestWhereUniqueInput, { nullable: false })
  where!: OrderRequestWhereUniqueInput;
}
