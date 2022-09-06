import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { OrderRequest_deliveryPort } from './order-request-delivery-port.enum';
import { PoStatus } from '../prisma/po-status.enum';
import { HideField } from '@nestjs/graphql';
import { OrderRequestDetailUpdateManyWithoutOrderRequestNestedInput } from '../order-request-detail/order-request-detail-update-many-without-order-request-nested.input';

@InputType()
export class OrderRequestUpdateWithoutOrderEntryInput {

    @Field(() => Int, {nullable:true})
    @Validator.IsNotEmpty()
    containerNo?: number;

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    orderRequestNo?: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsNotEmpty()
    deliveryDate?: Date | string;

    @Field(() => Date, {nullable:true})
    @Validator.IsNotEmpty()
    poRequestDate?: Date | string;

    @Field(() => OrderRequest_deliveryPort, {nullable:true})
    deliveryPort?: keyof typeof OrderRequest_deliveryPort;

    @Field(() => PoStatus, {nullable:true})
    poStatus?: keyof typeof PoStatus;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsNotEmpty()
    discarded?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => OrderRequestDetailUpdateManyWithoutOrderRequestNestedInput, {nullable:true})
    orderRequestDetail?: OrderRequestDetailUpdateManyWithoutOrderRequestNestedInput;
}
