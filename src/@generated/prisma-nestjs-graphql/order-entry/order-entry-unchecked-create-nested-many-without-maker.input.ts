import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryCreateWithoutMakerInput } from './order-entry-create-without-maker.input';
import { Type } from 'class-transformer';
import { OrderEntryCreateOrConnectWithoutMakerInput } from './order-entry-create-or-connect-without-maker.input';
import { OrderEntryCreateManyMakerInputEnvelope } from './order-entry-create-many-maker-input-envelope.input';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';

@InputType()
export class OrderEntryUncheckedCreateNestedManyWithoutMakerInput {

    @Field(() => [OrderEntryCreateWithoutMakerInput], {nullable:true})
    @Type(() => OrderEntryCreateWithoutMakerInput)
    create?: Array<OrderEntryCreateWithoutMakerInput>;

    @Field(() => [OrderEntryCreateOrConnectWithoutMakerInput], {nullable:true})
    @Type(() => OrderEntryCreateOrConnectWithoutMakerInput)
    connectOrCreate?: Array<OrderEntryCreateOrConnectWithoutMakerInput>;

    @Field(() => OrderEntryCreateManyMakerInputEnvelope, {nullable:true})
    @Type(() => OrderEntryCreateManyMakerInputEnvelope)
    createMany?: OrderEntryCreateManyMakerInputEnvelope;

    @Field(() => [OrderEntryWhereUniqueInput], {nullable:true})
    @Type(() => OrderEntryWhereUniqueInput)
    connect?: Array<OrderEntryWhereUniqueInput>;
}
