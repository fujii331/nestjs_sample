import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailCreateInput } from './order-request-detail-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOrderRequestDetailArgs {
  @Field(() => OrderRequestDetailCreateInput, { nullable: false })
  @ValidateNested()
  @Type(() => OrderRequestDetailCreateInput)
  data!: OrderRequestDetailCreateInput;
}
