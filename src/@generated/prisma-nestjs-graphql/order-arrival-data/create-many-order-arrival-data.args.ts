import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataCreateManyInput } from './order-arrival-data-create-many.input';

@ArgsType()
export class CreateManyOrderArrivalDataArgs {
  @Field(() => [OrderArrivalDataCreateManyInput], { nullable: false })
  data!: Array<OrderArrivalDataCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
