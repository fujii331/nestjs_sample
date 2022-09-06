import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ProductMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    prodCd?: true;

    @Field(() => Boolean, {nullable:true})
    makerCd?: true;

    @Field(() => Boolean, {nullable:true})
    prodName?: true;

    @Field(() => Boolean, {nullable:true})
    ssp180Days?: true;

    @Field(() => Boolean, {nullable:true})
    carton3SideSize?: true;

    @Field(() => Boolean, {nullable:true})
    minOrderQuantity?: true;

    @Field(() => Boolean, {nullable:true})
    isValid?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;
}
