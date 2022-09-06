import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { OrderRequest_deliveryPort } from './order-request-delivery-port.enum';
import { PoStatus } from '../prisma/po-status.enum';
import { HideField } from '@nestjs/graphql';
import { OrderRequestDetailCreateNestedManyWithoutOrderRequestInput } from '../order-request-detail/order-request-detail-create-nested-many-without-order-request.input';

@InputType()
export class OrderRequestCreateWithoutOrderEntryInput {

    @Field(() => Int, {nullable:false})
    @Validator.IsNotEmpty()
    containerNo!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    orderRequestNo!: string;

    @Field(() => Date, {nullable:false})
    @Validator.IsNotEmpty()
    deliveryDate!: Date | string;

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

    @Field(() => OrderRequestDetailCreateNestedManyWithoutOrderRequestInput, {nullable:true})
    orderRequestDetail?: OrderRequestDetailCreateNestedManyWithoutOrderRequestInput;
}
