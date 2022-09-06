import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { DeliveryPort } from '../prisma/delivery-port.enum';
import { HideField } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutOrderArrivalDataInput } from '../product/product-create-nested-one-without-order-arrival-data.input';

@InputType()
export class OrderArrivalDataCreateInput {

    @Field(() => Int, {nullable:false})
    @Validator.IsNotEmpty()
    orderQuantity!: number;

    @Field(() => Date, {nullable:true})
    deliveryDate?: Date | string;

    @Field(() => DeliveryPort, {nullable:true})
    deliveryPort?: keyof typeof DeliveryPort;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutOrderArrivalDataInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutOrderArrivalDataInput;
}
