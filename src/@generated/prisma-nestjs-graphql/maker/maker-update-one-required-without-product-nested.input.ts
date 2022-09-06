import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerCreateWithoutProductInput } from './maker-create-without-product.input';
import { Type } from 'class-transformer';
import { MakerCreateOrConnectWithoutProductInput } from './maker-create-or-connect-without-product.input';
import { MakerUpsertWithoutProductInput } from './maker-upsert-without-product.input';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { MakerUpdateWithoutProductInput } from './maker-update-without-product.input';

@InputType()
export class MakerUpdateOneRequiredWithoutProductNestedInput {

    @Field(() => MakerCreateWithoutProductInput, {nullable:true})
    @Type(() => MakerCreateWithoutProductInput)
    create?: MakerCreateWithoutProductInput;

    @Field(() => MakerCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => MakerCreateOrConnectWithoutProductInput)
    connectOrCreate?: MakerCreateOrConnectWithoutProductInput;

    @Field(() => MakerUpsertWithoutProductInput, {nullable:true})
    @Type(() => MakerUpsertWithoutProductInput)
    upsert?: MakerUpsertWithoutProductInput;

    @Field(() => MakerWhereUniqueInput, {nullable:true})
    @Type(() => MakerWhereUniqueInput)
    connect?: MakerWhereUniqueInput;

    @Field(() => MakerUpdateWithoutProductInput, {nullable:true})
    @Type(() => MakerUpdateWithoutProductInput)
    update?: MakerUpdateWithoutProductInput;
}
