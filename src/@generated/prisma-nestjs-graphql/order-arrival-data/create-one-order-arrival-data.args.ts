import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataCreateInput } from './order-arrival-data-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneOrderArrivalDataArgs {

    @Field(() => OrderArrivalDataCreateInput, {nullable:false})
    @Type(() => OrderArrivalDataCreateInput)
    @ValidateNested()
    @Type(() => OrderArrivalDataCreateInput)
    data!: OrderArrivalDataCreateInput;
}
