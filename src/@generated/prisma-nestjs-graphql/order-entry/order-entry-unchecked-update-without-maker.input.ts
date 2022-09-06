import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { OrderRequestUncheckedUpdateManyWithoutOrderEntryNestedInput } from '../order-request/order-request-unchecked-update-many-without-order-entry-nested.input';

@InputType()
export class OrderEntryUncheckedUpdateWithoutMakerInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => OrderRequestUncheckedUpdateManyWithoutOrderEntryNestedInput, {nullable:true})
    orderRequest?: OrderRequestUncheckedUpdateManyWithoutOrderEntryNestedInput;
}
