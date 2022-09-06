import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerCreateWithoutOrderEntryInput } from './maker-create-without-order-entry.input';
import { MakerCreateOrConnectWithoutOrderEntryInput } from './maker-create-or-connect-without-order-entry.input';
import { MakerUpsertWithoutOrderEntryInput } from './maker-upsert-without-order-entry.input';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { MakerUpdateWithoutOrderEntryInput } from './maker-update-without-order-entry.input';

@InputType()
export class MakerUpdateOneRequiredWithoutOrderEntryInput {

    @Field(() => MakerCreateWithoutOrderEntryInput, {nullable:true})
    create?: MakerCreateWithoutOrderEntryInput;

    @Field(() => MakerCreateOrConnectWithoutOrderEntryInput, {nullable:true})
    connectOrCreate?: MakerCreateOrConnectWithoutOrderEntryInput;

    @Field(() => MakerUpsertWithoutOrderEntryInput, {nullable:true})
    upsert?: MakerUpsertWithoutOrderEntryInput;

    @Field(() => MakerWhereUniqueInput, {nullable:true})
    connect?: MakerWhereUniqueInput;

    @Field(() => MakerUpdateWithoutOrderEntryInput, {nullable:true})
    update?: MakerUpdateWithoutOrderEntryInput;
}
