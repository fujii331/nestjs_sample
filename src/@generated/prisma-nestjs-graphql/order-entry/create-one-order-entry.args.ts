import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryCreateInput } from './order-entry-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOrderEntryArgs {
  @Field(() => OrderEntryCreateInput, { nullable: false })
  @ValidateNested()
  @Type(() => OrderEntryCreateInput)
  data!: OrderEntryCreateInput;
}
