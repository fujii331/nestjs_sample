import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderRequestDetailUncheckedUpdateManyWithoutOrderRequestDetailInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    prodCd?: string;

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
}
