import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrderRequestDetailAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    orderQuantity?: number;

    @Field(() => Float, {nullable:true})
    ssp?: number;

    @Field(() => Float, {nullable:true})
    cbm?: number;

    @Field(() => Float, {nullable:true})
    orderRequestId?: number;
}
