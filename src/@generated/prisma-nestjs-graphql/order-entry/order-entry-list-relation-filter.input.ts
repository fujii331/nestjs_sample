import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryWhereInput } from './order-entry-where.input';

@InputType()
export class OrderEntryListRelationFilter {

    @Field(() => OrderEntryWhereInput, {nullable:true})
    every?: OrderEntryWhereInput;

    @Field(() => OrderEntryWhereInput, {nullable:true})
    some?: OrderEntryWhereInput;

    @Field(() => OrderEntryWhereInput, {nullable:true})
    none?: OrderEntryWhereInput;
}
