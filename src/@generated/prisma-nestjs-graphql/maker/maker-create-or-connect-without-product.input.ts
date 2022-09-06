import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { Type } from 'class-transformer';
import { MakerCreateWithoutProductInput } from './maker-create-without-product.input';

@InputType()
export class MakerCreateOrConnectWithoutProductInput {

    @Field(() => MakerWhereUniqueInput, {nullable:false})
    @Type(() => MakerWhereUniqueInput)
    where!: MakerWhereUniqueInput;

    @Field(() => MakerCreateWithoutProductInput, {nullable:false})
    @Type(() => MakerCreateWithoutProductInput)
    create!: MakerCreateWithoutProductInput;
}
