import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerCreateWithoutProductInput } from './maker-create-without-product.input';
import { Type } from 'class-transformer';
import { MakerCreateOrConnectWithoutProductInput } from './maker-create-or-connect-without-product.input';
import { MakerWhereUniqueInput } from './maker-where-unique.input';

@InputType()
export class MakerCreateNestedOneWithoutProductInput {

    @Field(() => MakerCreateWithoutProductInput, {nullable:true})
    @Type(() => MakerCreateWithoutProductInput)
    create?: MakerCreateWithoutProductInput;

    @Field(() => MakerCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => MakerCreateOrConnectWithoutProductInput)
    connectOrCreate?: MakerCreateOrConnectWithoutProductInput;

    @Field(() => MakerWhereUniqueInput, {nullable:true})
    @Type(() => MakerWhereUniqueInput)
    connect?: MakerWhereUniqueInput;
}
