import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { OrderRequestUpdateManyWithoutOrderEntryNestedInput } from '../order-request/order-request-update-many-without-order-entry-nested.input';

@InputType()
export class OrderEntryUpdateWithoutMakerInput {

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => OrderRequestUpdateManyWithoutOrderEntryNestedInput, {nullable:true})
    orderRequest?: OrderRequestUpdateManyWithoutOrderEntryNestedInput;
}
