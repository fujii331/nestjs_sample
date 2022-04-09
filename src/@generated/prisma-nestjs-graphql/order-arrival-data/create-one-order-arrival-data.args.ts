import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataCreateInput } from './order-arrival-data-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOrderArrivalDataArgs {
  @Field(() => OrderArrivalDataCreateInput, { nullable: false })
  @ValidateNested()
  @Type(() => OrderArrivalDataCreateInput)
  data!: OrderArrivalDataCreateInput;
}
