import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryCreateInput } from './order-entry-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneOrderEntryArgs {

    @Field(() => OrderEntryCreateInput, {nullable:false})
    @Type(() => OrderEntryCreateInput)
    @ValidateNested()
    @Type(() => OrderEntryCreateInput)
    data!: OrderEntryCreateInput;
}
