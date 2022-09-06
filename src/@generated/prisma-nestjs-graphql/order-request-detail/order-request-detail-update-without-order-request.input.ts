import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutOrderRequestDetailNestedInput } from '../product/product-update-one-required-without-order-request-detail-nested.input';

@InputType()
export class OrderRequestDetailUpdateWithoutOrderRequestInput {

    @Field(() => Int, {nullable:true})
    @Validator.IsNotEmpty()
    orderQuantity?: number;

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

    @Field(() => ProductUpdateOneRequiredWithoutOrderRequestDetailNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutOrderRequestDetailNestedInput;
}
