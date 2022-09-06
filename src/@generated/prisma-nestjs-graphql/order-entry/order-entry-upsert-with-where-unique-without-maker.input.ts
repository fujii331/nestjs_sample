import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { Type } from 'class-transformer';
import { OrderEntryUpdateWithoutMakerInput } from './order-entry-update-without-maker.input';
import { OrderEntryCreateWithoutMakerInput } from './order-entry-create-without-maker.input';

@InputType()
export class OrderEntryUpsertWithWhereUniqueWithoutMakerInput {

    @Field(() => OrderEntryWhereUniqueInput, {nullable:false})
    @Type(() => OrderEntryWhereUniqueInput)
    where!: OrderEntryWhereUniqueInput;

    @Field(() => OrderEntryUpdateWithoutMakerInput, {nullable:false})
    @Type(() => OrderEntryUpdateWithoutMakerInput)
    update!: OrderEntryUpdateWithoutMakerInput;

    @Field(() => OrderEntryCreateWithoutMakerInput, {nullable:false})
    @Type(() => OrderEntryCreateWithoutMakerInput)
    create!: OrderEntryCreateWithoutMakerInput;
}
