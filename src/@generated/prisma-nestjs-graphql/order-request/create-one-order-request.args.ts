import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestCreateInput } from './order-request-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOrderRequestArgs {
  @Field(() => OrderRequestCreateInput, { nullable: false })
  @ValidateNested()
  @Type(() => OrderRequestCreateInput)
  data!: OrderRequestCreateInput;
}
