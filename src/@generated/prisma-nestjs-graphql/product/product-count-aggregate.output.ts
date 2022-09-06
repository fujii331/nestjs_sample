import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class ProductCountAggregate {

    @Field(() => Int, {nullable:false})
    prodCd!: number;

    @Field(() => Int, {nullable:false})
    makerCd!: number;

    @Field(() => Int, {nullable:false})
    prodName!: number;

    @Field(() => Int, {nullable:false})
    ssp180Days!: number;

    @Field(() => Int, {nullable:false})
    carton3SideSize!: number;

    @Field(() => Int, {nullable:false})
    minOrderQuantity!: number;

    @Field(() => Int, {nullable:false})
    isValid!: number;

    @HideField()
    createdAt!: number;

    @HideField()
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
