import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryCreateWithoutMakerInput } from './order-entry-create-without-maker.input';
import { Type } from 'class-transformer';
import { OrderEntryCreateOrConnectWithoutMakerInput } from './order-entry-create-or-connect-without-maker.input';
import { OrderEntryUpsertWithWhereUniqueWithoutMakerInput } from './order-entry-upsert-with-where-unique-without-maker.input';
import { OrderEntryCreateManyMakerInputEnvelope } from './order-entry-create-many-maker-input-envelope.input';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { OrderEntryUpdateWithWhereUniqueWithoutMakerInput } from './order-entry-update-with-where-unique-without-maker.input';
import { OrderEntryUpdateManyWithWhereWithoutMakerInput } from './order-entry-update-many-with-where-without-maker.input';
import { OrderEntryScalarWhereInput } from './order-entry-scalar-where.input';

@InputType()
export class OrderEntryUncheckedUpdateManyWithoutMakerNestedInput {

    @Field(() => [OrderEntryCreateWithoutMakerInput], {nullable:true})
    @Type(() => OrderEntryCreateWithoutMakerInput)
    create?: Array<OrderEntryCreateWithoutMakerInput>;

    @Field(() => [OrderEntryCreateOrConnectWithoutMakerInput], {nullable:true})
    @Type(() => OrderEntryCreateOrConnectWithoutMakerInput)
    connectOrCreate?: Array<OrderEntryCreateOrConnectWithoutMakerInput>;

    @Field(() => [OrderEntryUpsertWithWhereUniqueWithoutMakerInput], {nullable:true})
    @Type(() => OrderEntryUpsertWithWhereUniqueWithoutMakerInput)
    upsert?: Array<OrderEntryUpsertWithWhereUniqueWithoutMakerInput>;

    @Field(() => OrderEntryCreateManyMakerInputEnvelope, {nullable:true})
    @Type(() => OrderEntryCreateManyMakerInputEnvelope)
    createMany?: OrderEntryCreateManyMakerInputEnvelope;

    @Field(() => [OrderEntryWhereUniqueInput], {nullable:true})
    @Type(() => OrderEntryWhereUniqueInput)
    set?: Array<OrderEntryWhereUniqueInput>;

    @Field(() => [OrderEntryWhereUniqueInput], {nullable:true})
    @Type(() => OrderEntryWhereUniqueInput)
    disconnect?: Array<OrderEntryWhereUniqueInput>;

    @Field(() => [OrderEntryWhereUniqueInput], {nullable:true})
    @Type(() => OrderEntryWhereUniqueInput)
    delete?: Array<OrderEntryWhereUniqueInput>;

    @Field(() => [OrderEntryWhereUniqueInput], {nullable:true})
    @Type(() => OrderEntryWhereUniqueInput)
    connect?: Array<OrderEntryWhereUniqueInput>;

    @Field(() => [OrderEntryUpdateWithWhereUniqueWithoutMakerInput], {nullable:true})
    @Type(() => OrderEntryUpdateWithWhereUniqueWithoutMakerInput)
    update?: Array<OrderEntryUpdateWithWhereUniqueWithoutMakerInput>;

    @Field(() => [OrderEntryUpdateManyWithWhereWithoutMakerInput], {nullable:true})
    @Type(() => OrderEntryUpdateManyWithWhereWithoutMakerInput)
    updateMany?: Array<OrderEntryUpdateManyWithWhereWithoutMakerInput>;

    @Field(() => [OrderEntryScalarWhereInput], {nullable:true})
    @Type(() => OrderEntryScalarWhereInput)
    deleteMany?: Array<OrderEntryScalarWhereInput>;
}
