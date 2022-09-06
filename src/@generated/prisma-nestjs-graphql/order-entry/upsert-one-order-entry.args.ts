import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { Type } from 'class-transformer';
import { OrderEntryCreateInput } from './order-entry-create.input';
import { OrderEntryUpdateInput } from './order-entry-update.input';

@ArgsType()
export class UpsertOneOrderEntryArgs {

    @Field(() => OrderEntryWhereUniqueInput, {nullable:false})
    @Type(() => OrderEntryWhereUniqueInput)
    where!: OrderEntryWhereUniqueInput;

    @Field(() => OrderEntryCreateInput, {nullable:false})
    @Type(() => OrderEntryCreateInput)
    create!: OrderEntryCreateInput;

    @Field(() => OrderEntryUpdateInput, {nullable:false})
    @Type(() => OrderEntryUpdateInput)
    update!: OrderEntryUpdateInput;
}
