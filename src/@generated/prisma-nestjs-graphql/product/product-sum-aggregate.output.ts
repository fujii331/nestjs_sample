import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductSumAggregate {

    @Field(() => Float, {nullable:true})
    ssp180Days?: number;

    @Field(() => Float, {nullable:true})
    carton3SideSize?: number;

    @Field(() => Int, {nullable:true})
    minOrderQuantity?: number;
}
