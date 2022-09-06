import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProductAvgAggregate {

    @Field(() => Float, {nullable:true})
    ssp180Days?: number;

    @Field(() => Float, {nullable:true})
    carton3SideSize?: number;

    @Field(() => Float, {nullable:true})
    minOrderQuantity?: number;
}
