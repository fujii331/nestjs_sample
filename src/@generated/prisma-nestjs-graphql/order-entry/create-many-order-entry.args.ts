import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryCreateManyInput } from './order-entry-create-many.input';

@ArgsType()
export class CreateManyOrderEntryArgs {
  @Field(() => [OrderEntryCreateManyInput], { nullable: false })
  data!: Array<OrderEntryCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
