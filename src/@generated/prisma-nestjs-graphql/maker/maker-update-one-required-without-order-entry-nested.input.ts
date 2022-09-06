import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerCreateWithoutOrderEntryInput } from './maker-create-without-order-entry.input';
import { Type } from 'class-transformer';
import { MakerCreateOrConnectWithoutOrderEntryInput } from './maker-create-or-connect-without-order-entry.input';
import { MakerUpsertWithoutOrderEntryInput } from './maker-upsert-without-order-entry.input';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { MakerUpdateWithoutOrderEntryInput } from './maker-update-without-order-entry.input';

@InputType()
export class MakerUpdateOneRequiredWithoutOrderEntryNestedInput {

    @Field(() => MakerCreateWithoutOrderEntryInput, {nullable:true})
    @Type(() => MakerCreateWithoutOrderEntryInput)
    create?: MakerCreateWithoutOrderEntryInput;

    @Field(() => MakerCreateOrConnectWithoutOrderEntryInput, {nullable:true})
    @Type(() => MakerCreateOrConnectWithoutOrderEntryInput)
    connectOrCreate?: MakerCreateOrConnectWithoutOrderEntryInput;

    @Field(() => MakerUpsertWithoutOrderEntryInput, {nullable:true})
    @Type(() => MakerUpsertWithoutOrderEntryInput)
    upsert?: MakerUpsertWithoutOrderEntryInput;

    @Field(() => MakerWhereUniqueInput, {nullable:true})
    @Type(() => MakerWhereUniqueInput)
    connect?: MakerWhereUniqueInput;

    @Field(() => MakerUpdateWithoutOrderEntryInput, {nullable:true})
    @Type(() => MakerUpdateWithoutOrderEntryInput)
    update?: MakerUpdateWithoutOrderEntryInput;
}
