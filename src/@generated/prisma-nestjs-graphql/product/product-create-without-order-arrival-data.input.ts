import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { MakerCreateNestedOneWithoutProductInput } from '../maker/maker-create-nested-one-without-product.input';
import { OrderRequestDetailCreateNestedManyWithoutProductInput } from '../order-request-detail/order-request-detail-create-nested-many-without-product.input';

@InputType()
export class ProductCreateWithoutOrderArrivalDataInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    prodCd!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    prodName!: string;

    @Field(() => Float, {nullable:true})
    ssp180Days?: number;

    @Field(() => Float, {nullable:true})
    carton3SideSize?: number;

    @Field(() => Int, {nullable:false})
    minOrderQuantity!: number;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsNotEmpty()
    isValid?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => MakerCreateNestedOneWithoutProductInput, {nullable:false})
    maker!: MakerCreateNestedOneWithoutProductInput;

    @Field(() => OrderRequestDetailCreateNestedManyWithoutProductInput, {nullable:true})
    orderRequestDetail?: OrderRequestDetailCreateNestedManyWithoutProductInput;
}
