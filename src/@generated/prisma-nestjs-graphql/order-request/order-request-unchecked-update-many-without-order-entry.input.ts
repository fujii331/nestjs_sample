import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestCreateWithoutOrderEntryInput } from './order-request-create-without-order-entry.input';
import { OrderRequestCreateOrConnectWithoutOrderEntryInput } from './order-request-create-or-connect-without-order-entry.input';
import { OrderRequestUpsertWithWhereUniqueWithoutOrderEntryInput } from './order-request-upsert-with-where-unique-without-order-entry.input';
import { OrderRequestCreateManyOrderEntryInputEnvelope } from './order-request-create-many-order-entry-input-envelope.input';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { OrderRequestUpdateWithWhereUniqueWithoutOrderEntryInput } from './order-request-update-with-where-unique-without-order-entry.input';
import { OrderRequestUpdateManyWithWhereWithoutOrderEntryInput } from './order-request-update-many-with-where-without-order-entry.input';
import { OrderRequestScalarWhereInput } from './order-request-scalar-where.input';

@InputType()
export class OrderRequestUncheckedUpdateManyWithoutOrderEntryInput {

    @Field(() => [OrderRequestCreateWithoutOrderEntryInput], {nullable:true})
    create?: Array<OrderRequestCreateWithoutOrderEntryInput>;

    @Field(() => [OrderRequestCreateOrConnectWithoutOrderEntryInput], {nullable:true})
    connectOrCreate?: Array<OrderRequestCreateOrConnectWithoutOrderEntryInput>;

    @Field(() => [OrderRequestUpsertWithWhereUniqueWithoutOrderEntryInput], {nullable:true})
    upsert?: Array<OrderRequestUpsertWithWhereUniqueWithoutOrderEntryInput>;

    @Field(() => OrderRequestCreateManyOrderEntryInputEnvelope, {nullable:true})
    createMany?: OrderRequestCreateManyOrderEntryInputEnvelope;

    @Field(() => [OrderRequestWhereUniqueInput], {nullable:true})
    set?: Array<OrderRequestWhereUniqueInput>;

    @Field(() => [OrderRequestWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderRequestWhereUniqueInput>;

    @Field(() => [OrderRequestWhereUniqueInput], {nullable:true})
    delete?: Array<OrderRequestWhereUniqueInput>;

    @Field(() => [OrderRequestWhereUniqueInput], {nullable:true})
    connect?: Array<OrderRequestWhereUniqueInput>;

    @Field(() => [OrderRequestUpdateWithWhereUniqueWithoutOrderEntryInput], {nullable:true})
    update?: Array<OrderRequestUpdateWithWhereUniqueWithoutOrderEntryInput>;

    @Field(() => [OrderRequestUpdateManyWithWhereWithoutOrderEntryInput], {nullable:true})
    updateMany?: Array<OrderRequestUpdateManyWithWhereWithoutOrderEntryInput>;

    @Field(() => [OrderRequestScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderRequestScalarWhereInput>;
}
