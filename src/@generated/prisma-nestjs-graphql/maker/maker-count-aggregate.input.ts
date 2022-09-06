import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MakerCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    makerCd?: true;

    @Field(() => Boolean, {nullable:true})
    makerName?: true;

    @Field(() => Boolean, {nullable:true})
    leadtime?: true;

    @Field(() => Boolean, {nullable:true})
    isValid?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
