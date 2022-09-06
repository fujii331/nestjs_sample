import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerCreateWithoutOrderEntryInput } from './maker-create-without-order-entry.input';
import { Type } from 'class-transformer';
import { MakerCreateOrConnectWithoutOrderEntryInput } from './maker-create-or-connect-without-order-entry.input';
import { MakerWhereUniqueInput } from './maker-where-unique.input';

@InputType()
export class MakerCreateNestedOneWithoutOrderEntryInput {

    @Field(() => MakerCreateWithoutOrderEntryInput, {nullable:true})
    @Type(() => MakerCreateWithoutOrderEntryInput)
    create?: MakerCreateWithoutOrderEntryInput;

    @Field(() => MakerCreateOrConnectWithoutOrderEntryInput, {nullable:true})
    @Type(() => MakerCreateOrConnectWithoutOrderEntryInput)
    connectOrCreate?: MakerCreateOrConnectWithoutOrderEntryInput;

    @Field(() => MakerWhereUniqueInput, {nullable:true})
    @Type(() => MakerWhereUniqueInput)
    connect?: MakerWhereUniqueInput;
}
