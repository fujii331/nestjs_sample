import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestCreateInput } from './order-request-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneOrderRequestArgs {

    @Field(() => OrderRequestCreateInput, {nullable:false})
    @Type(() => OrderRequestCreateInput)
    @ValidateNested()
    @Type(() => OrderRequestCreateInput)
    data!: OrderRequestCreateInput;
}
