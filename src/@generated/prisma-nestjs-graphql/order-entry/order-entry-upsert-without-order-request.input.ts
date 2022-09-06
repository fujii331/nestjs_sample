import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryUpdateWithoutOrderRequestInput } from './order-entry-update-without-order-request.input';
import { Type } from 'class-transformer';
import { OrderEntryCreateWithoutOrderRequestInput } from './order-entry-create-without-order-request.input';

@InputType()
export class OrderEntryUpsertWithoutOrderRequestInput {

    @Field(() => OrderEntryUpdateWithoutOrderRequestInput, {nullable:false})
    @Type(() => OrderEntryUpdateWithoutOrderRequestInput)
    update!: OrderEntryUpdateWithoutOrderRequestInput;

    @Field(() => OrderEntryCreateWithoutOrderRequestInput, {nullable:false})
    @Type(() => OrderEntryCreateWithoutOrderRequestInput)
    create!: OrderEntryCreateWithoutOrderRequestInput;
}
