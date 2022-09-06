import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueOrderEntryArgs {

    @Field(() => OrderEntryWhereUniqueInput, {nullable:false})
    @Type(() => OrderEntryWhereUniqueInput)
    where!: OrderEntryWhereUniqueInput;
}
