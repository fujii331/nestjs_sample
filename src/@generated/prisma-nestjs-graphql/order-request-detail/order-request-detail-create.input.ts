import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { OrderRequestCreateNestedOneWithoutOrderRequestDetailInput } from '../order-request/order-request-create-nested-one-without-order-request-detail.input';
import { ProductCreateNestedOneWithoutOrderRequestDetailInput } from '../product/product-create-nested-one-without-order-request-detail.input';

@InputType()
export class OrderRequestDetailCreateInput {

    @Field(() => Int, {nullable:false})
    @Validator.IsNotEmpty()
    orderQuantity!: number;

    @Field(() => Float, {nullable:true})
    ssp?: number;

    @Field(() => Float, {nullable:true})
    cbm?: number;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsNotEmpty()
    wasOrderAlerted?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => OrderRequestCreateNestedOneWithoutOrderRequestDetailInput, {nullable:false})
    orderRequest!: OrderRequestCreateNestedOneWithoutOrderRequestDetailInput;

    @Field(() => ProductCreateNestedOneWithoutOrderRequestDetailInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutOrderRequestDetailInput;
}
