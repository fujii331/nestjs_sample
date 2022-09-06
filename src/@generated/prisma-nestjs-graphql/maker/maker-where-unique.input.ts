import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class MakerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    makerCd?: string;
}
