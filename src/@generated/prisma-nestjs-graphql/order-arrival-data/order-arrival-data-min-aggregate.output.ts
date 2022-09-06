import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeliveryPort } from '../prisma/delivery-port.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class OrderArrivalDataMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    prodCd?: string;

    @Field(() => Int, {nullable:true})
    orderQuantity?: number;

    @Field(() => Date, {nullable:true})
    deliveryDate?: Date | string;

    @Field(() => DeliveryPort, {nullable:true})
    deliveryPort?: keyof typeof DeliveryPort;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
