import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestCreateWithoutOrderEntryInput } from './order-request-create-without-order-entry.input';
import { Type } from 'class-transformer';
import { OrderRequestCreateOrConnectWithoutOrderEntryInput } from './order-request-create-or-connect-without-order-entry.input';
import { OrderRequestUpsertWithWhereUniqueWithoutOrderEntryInput } from './order-request-upsert-with-where-unique-without-order-entry.input';
import { OrderRequestCreateManyOrderEntryInputEnvelope } from './order-request-create-many-order-entry-input-envelope.input';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { OrderRequestUpdateWithWhereUniqueWithoutOrderEntryInput } from './order-request-update-with-where-unique-without-order-entry.input';
import { OrderRequestUpdateManyWithWhereWithoutOrderEntryInput } from './order-request-update-many-with-where-without-order-entry.input';
import { OrderRequestScalarWhereInput } from './order-request-scalar-where.input';

@InputType()
export class OrderRequestUpdateManyWithoutOrderEntryNestedInput {

    @Field(() => [OrderRequestCreateWithoutOrderEntryInput], {nullable:true})
    @Type(() => OrderRequestCreateWithoutOrderEntryInput)
    create?: Array<OrderRequestCreateWithoutOrderEntryInput>;

    @Field(() => [OrderRequestCreateOrConnectWithoutOrderEntryInput], {nullable:true})
    @Type(() => OrderRequestCreateOrConnectWithoutOrderEntryInput)
    connectOrCreate?: Array<OrderRequestCreateOrConnectWithoutOrderEntryInput>;

    @Field(() => [OrderRequestUpsertWithWhereUniqueWithoutOrderEntryInput], {nullable:true})
    @Type(() => OrderRequestUpsertWithWhereUniqueWithoutOrderEntryInput)
    upsert?: Array<OrderRequestUpsertWithWhereUniqueWithoutOrderEntryInput>;

    @Field(() => OrderRequestCreateManyOrderEntryInputEnvelope, {nullable:true})
    @Type(() => OrderRequestCreateManyOrderEntryInputEnvelope)
    createMany?: OrderRequestCreateManyOrderEntryInputEnvelope;

    @Field(() => [OrderRequestWhereUniqueInput], {nullable:true})
    @Type(() => OrderRequestWhereUniqueInput)
    set?: Array<OrderRequestWhereUniqueInput>;

    @Field(() => [OrderRequestWhereUniqueInput], {nullable:true})
    @Type(() => OrderRequestWhereUniqueInput)
    disconnect?: Array<OrderRequestWhereUniqueInput>;

    @Field(() => [OrderRequestWhereUniqueInput], {nullable:true})
    @Type(() => OrderRequestWhereUniqueInput)
    delete?: Array<OrderRequestWhereUniqueInput>;

    @Field(() => [OrderRequestWhereUniqueInput], {nullable:true})
    @Type(() => OrderRequestWhereUniqueInput)
    connect?: Array<OrderRequestWhereUniqueInput>;

    @Field(() => [OrderRequestUpdateWithWhereUniqueWithoutOrderEntryInput], {nullable:true})
    @Type(() => OrderRequestUpdateWithWhereUniqueWithoutOrderEntryInput)
    update?: Array<OrderRequestUpdateWithWhereUniqueWithoutOrderEntryInput>;

    @Field(() => [OrderRequestUpdateManyWithWhereWithoutOrderEntryInput], {nullable:true})
    @Type(() => OrderRequestUpdateManyWithWhereWithoutOrderEntryInput)
    updateMany?: Array<OrderRequestUpdateManyWithWhereWithoutOrderEntryInput>;

    @Field(() => [OrderRequestScalarWhereInput], {nullable:true})
    @Type(() => OrderRequestScalarWhereInput)
    deleteMany?: Array<OrderRequestScalarWhereInput>;
}
