import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class OrderArrivalDataWhereUniqueInput {

    @Field(() => Int, {nullable:false})
    id!: number;
}
