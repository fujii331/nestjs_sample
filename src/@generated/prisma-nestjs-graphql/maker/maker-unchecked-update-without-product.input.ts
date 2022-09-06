import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { OrderEntryUncheckedUpdateManyWithoutMakerNestedInput } from '../order-entry/order-entry-unchecked-update-many-without-maker-nested.input';

@InputType()
export class MakerUncheckedUpdateWithoutProductInput {

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    makerCd?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    makerName?: string;

    @Field(() => Int, {nullable:true})
    leadtime?: number;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsNotEmpty()
    isValid?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => OrderEntryUncheckedUpdateManyWithoutMakerNestedInput, {nullable:true})
    orderEntry?: OrderEntryUncheckedUpdateManyWithoutMakerNestedInput;
}
