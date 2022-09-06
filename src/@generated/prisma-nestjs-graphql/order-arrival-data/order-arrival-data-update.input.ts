import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { DeliveryPort } from '../prisma/delivery-port.enum';
import { HideField } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutOrderArrivalDataNestedInput } from '../product/product-update-one-required-without-order-arrival-data-nested.input';

@InputType()
export class OrderArrivalDataUpdateInput {

    @Field(() => Int, {nullable:true})
    @Validator.IsNotEmpty()
    orderQuantity?: number;

    @Field(() => Date, {nullable:true})
    deliveryDate?: Date | string;

    @Field(() => DeliveryPort, {nullable:true})
    deliveryPort?: keyof typeof DeliveryPort;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => ProductUpdateOneRequiredWithoutOrderArrivalDataNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutOrderArrivalDataNestedInput;
}
