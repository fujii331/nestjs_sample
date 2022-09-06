import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { DeliveryPort } from '../prisma/delivery-port.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderArrivalDataUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    prodCd!: string;

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
}
