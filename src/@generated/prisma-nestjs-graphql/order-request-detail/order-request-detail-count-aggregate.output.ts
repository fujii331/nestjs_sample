import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class OrderRequestDetailCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    prodCd!: number;

    @Field(() => Int, {nullable:false})
    orderQuantity!: number;

    @Field(() => Int, {nullable:false})
    ssp!: number;

    @Field(() => Int, {nullable:false})
    cbm!: number;

    @Field(() => Int, {nullable:false})
    wasOrderAlerted!: number;

    @HideField()
    createdAt!: number;

    @HideField()
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    orderRequestId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
