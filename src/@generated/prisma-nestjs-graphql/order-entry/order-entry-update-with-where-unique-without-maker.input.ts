import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { Type } from 'class-transformer';
import { OrderEntryUpdateWithoutMakerInput } from './order-entry-update-without-maker.input';

@InputType()
export class OrderEntryUpdateWithWhereUniqueWithoutMakerInput {

    @Field(() => OrderEntryWhereUniqueInput, {nullable:false})
    @Type(() => OrderEntryWhereUniqueInput)
    where!: OrderEntryWhereUniqueInput;

    @Field(() => OrderEntryUpdateWithoutMakerInput, {nullable:false})
    @Type(() => OrderEntryUpdateWithoutMakerInput)
    data!: OrderEntryUpdateWithoutMakerInput;
}
