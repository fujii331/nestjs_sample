import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailCreateWithoutOrderRequestInput } from './order-request-detail-create-without-order-request.input';
import { OrderRequestDetailCreateOrConnectWithoutOrderRequestInput } from './order-request-detail-create-or-connect-without-order-request.input';
import { OrderRequestDetailUpsertWithWhereUniqueWithoutOrderRequestInput } from './order-request-detail-upsert-with-where-unique-without-order-request.input';
import { OrderRequestDetailCreateManyOrderRequestInputEnvelope } from './order-request-detail-create-many-order-request-input-envelope.input';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { OrderRequestDetailUpdateWithWhereUniqueWithoutOrderRequestInput } from './order-request-detail-update-with-where-unique-without-order-request.input';
import { OrderRequestDetailUpdateManyWithWhereWithoutOrderRequestInput } from './order-request-detail-update-many-with-where-without-order-request.input';
import { OrderRequestDetailScalarWhereInput } from './order-request-detail-scalar-where.input';

@InputType()
export class OrderRequestDetailUpdateManyWithoutOrderRequestInput {

    @Field(() => [OrderRequestDetailCreateWithoutOrderRequestInput], {nullable:true})
    create?: Array<OrderRequestDetailCreateWithoutOrderRequestInput>;

    @Field(() => [OrderRequestDetailCreateOrConnectWithoutOrderRequestInput], {nullable:true})
    connectOrCreate?: Array<OrderRequestDetailCreateOrConnectWithoutOrderRequestInput>;

    @Field(() => [OrderRequestDetailUpsertWithWhereUniqueWithoutOrderRequestInput], {nullable:true})
    upsert?: Array<OrderRequestDetailUpsertWithWhereUniqueWithoutOrderRequestInput>;

    @Field(() => OrderRequestDetailCreateManyOrderRequestInputEnvelope, {nullable:true})
    createMany?: OrderRequestDetailCreateManyOrderRequestInputEnvelope;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    set?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    delete?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    connect?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailUpdateWithWhereUniqueWithoutOrderRequestInput], {nullable:true})
    update?: Array<OrderRequestDetailUpdateWithWhereUniqueWithoutOrderRequestInput>;

    @Field(() => [OrderRequestDetailUpdateManyWithWhereWithoutOrderRequestInput], {nullable:true})
    updateMany?: Array<OrderRequestDetailUpdateManyWithWhereWithoutOrderRequestInput>;

    @Field(() => [OrderRequestDetailScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderRequestDetailScalarWhereInput>;
}
