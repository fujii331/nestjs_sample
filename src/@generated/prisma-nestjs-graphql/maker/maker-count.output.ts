import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MakerCount {

    @Field(() => Int, {nullable:false})
    orderEntry?: number;

    @Field(() => Int, {nullable:false})
    product?: number;
}
