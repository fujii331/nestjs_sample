import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { Type } from 'class-transformer';
import { MakerCreateWithoutOrderEntryInput } from './maker-create-without-order-entry.input';

@InputType()
export class MakerCreateOrConnectWithoutOrderEntryInput {

    @Field(() => MakerWhereUniqueInput, {nullable:false})
    @Type(() => MakerWhereUniqueInput)
    where!: MakerWhereUniqueInput;

    @Field(() => MakerCreateWithoutOrderEntryInput, {nullable:false})
    @Type(() => MakerCreateWithoutOrderEntryInput)
    create!: MakerCreateWithoutOrderEntryInput;
}
