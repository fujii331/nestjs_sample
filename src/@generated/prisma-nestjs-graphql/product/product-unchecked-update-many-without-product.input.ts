import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ProductUncheckedUpdateManyWithoutProductInput {

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    prodCd?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    prodName?: string;

    @Field(() => Float, {nullable:true})
    ssp180Days?: number;

    @Field(() => Float, {nullable:true})
    carton3SideSize?: number;

    @Field(() => Int, {nullable:true})
    minOrderQuantity?: number;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsNotEmpty()
    isValid?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
