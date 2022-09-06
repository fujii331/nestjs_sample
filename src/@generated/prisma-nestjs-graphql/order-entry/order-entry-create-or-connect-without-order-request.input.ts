import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { Type } from 'class-transformer';
import { OrderEntryCreateWithoutOrderRequestInput } from './order-entry-create-without-order-request.input';

@InputType()
export class OrderEntryCreateOrConnectWithoutOrderRequestInput {

    @Field(() => OrderEntryWhereUniqueInput, {nullable:false})
    @Type(() => OrderEntryWhereUniqueInput)
    where!: OrderEntryWhereUniqueInput;

    @Field(() => OrderEntryCreateWithoutOrderRequestInput, {nullable:false})
    @Type(() => OrderEntryCreateWithoutOrderRequestInput)
    create!: OrderEntryCreateWithoutOrderRequestInput;
}
