import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailCreateManyInput } from './order-request-detail-create-many.input';

@ArgsType()
export class CreateManyOrderRequestDetailArgs {
  @Field(() => [OrderRequestDetailCreateManyInput], { nullable: false })
  data!: Array<OrderRequestDetailCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
