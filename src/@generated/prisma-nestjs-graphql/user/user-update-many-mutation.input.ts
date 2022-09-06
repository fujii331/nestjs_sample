import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { Authority } from '../prisma/authority.enum';

@InputType()
export class UserUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    name?: string;

    @Field(() => String, {nullable:true})
    @Validator.MinLength(8)
    password?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => Authority, {nullable:true})
    authority?: keyof typeof Authority;

    @HideField()
    hashedRefreshToken?: string;
}
