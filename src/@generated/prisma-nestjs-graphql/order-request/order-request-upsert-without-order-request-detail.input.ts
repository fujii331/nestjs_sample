import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestUpdateWithoutOrderRequestDetailInput } from './order-request-update-without-order-request-detail.input';
import { Type } from 'class-transformer';
import { OrderRequestCreateWithoutOrderRequestDetailInput } from './order-request-create-without-order-request-detail.input';

@InputType()
export class OrderRequestUpsertWithoutOrderRequestDetailInput {

    @Field(() => OrderRequestUpdateWithoutOrderRequestDetailInput, {nullable:false})
    @Type(() => OrderRequestUpdateWithoutOrderRequestDetailInput)
    update!: OrderRequestUpdateWithoutOrderRequestDetailInput;

    @Field(() => OrderRequestCreateWithoutOrderRequestDetailInput, {nullable:false})
    @Type(() => OrderRequestCreateWithoutOrderRequestDetailInput)
    create!: OrderRequestCreateWithoutOrderRequestDetailInput;
}
