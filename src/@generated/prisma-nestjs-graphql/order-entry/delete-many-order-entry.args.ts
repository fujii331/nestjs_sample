import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryWhereInput } from './order-entry-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOrderEntryArgs {

    @Field(() => OrderEntryWhereInput, {nullable:true})
    @Type(() => OrderEntryWhereInput)
    where?: OrderEntryWhereInput;
}
