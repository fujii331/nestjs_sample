import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestCreateManyInput } from './order-request-create-many.input';

@ArgsType()
export class CreateManyOrderRequestArgs {
  @Field(() => [OrderRequestCreateManyInput], { nullable: false })
  data!: Array<OrderRequestCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
