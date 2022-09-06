import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailCreateInput } from './order-request-detail-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneOrderRequestDetailArgs {

    @Field(() => OrderRequestDetailCreateInput, {nullable:false})
    @Type(() => OrderRequestDetailCreateInput)
    @ValidateNested()
    @Type(() => OrderRequestDetailCreateInput)
    data!: OrderRequestDetailCreateInput;
}
