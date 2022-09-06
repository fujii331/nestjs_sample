import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductCount {

    @Field(() => Int, {nullable:false})
    orderArrivalData?: number;

    @Field(() => Int, {nullable:false})
    orderRequestDetail?: number;
}
