import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryUpdateManyMutationInput } from './order-entry-update-many-mutation.input';
import { OrderEntryWhereInput } from './order-entry-where.input';

@ArgsType()
export class UpdateManyOrderEntryArgs {
  @Field(() => OrderEntryUpdateManyMutationInput, { nullable: false })
  data!: OrderEntryUpdateManyMutationInput;

  @Field(() => OrderEntryWhereInput, { nullable: true })
  where?: OrderEntryWhereInput;
}
