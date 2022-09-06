import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailCreateWithoutOrderRequestInput } from './order-request-detail-create-without-order-request.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailCreateOrConnectWithoutOrderRequestInput } from './order-request-detail-create-or-connect-without-order-request.input';
import { OrderRequestDetailUpsertWithWhereUniqueWithoutOrderRequestInput } from './order-request-detail-upsert-with-where-unique-without-order-request.input';
import { OrderRequestDetailCreateManyOrderRequestInputEnvelope } from './order-request-detail-create-many-order-request-input-envelope.input';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { OrderRequestDetailUpdateWithWhereUniqueWithoutOrderRequestInput } from './order-request-detail-update-with-where-unique-without-order-request.input';
import { OrderRequestDetailUpdateManyWithWhereWithoutOrderRequestInput } from './order-request-detail-update-many-with-where-without-order-request.input';
import { OrderRequestDetailScalarWhereInput } from './order-request-detail-scalar-where.input';

@InputType()
export class OrderRequestDetailUncheckedUpdateManyWithoutOrderRequestNestedInput {

    @Field(() => [OrderRequestDetailCreateWithoutOrderRequestInput], {nullable:true})
    @Type(() => OrderRequestDetailCreateWithoutOrderRequestInput)
    create?: Array<OrderRequestDetailCreateWithoutOrderRequestInput>;

    @Field(() => [OrderRequestDetailCreateOrConnectWithoutOrderRequestInput], {nullable:true})
    @Type(() => OrderRequestDetailCreateOrConnectWithoutOrderRequestInput)
    connectOrCreate?: Array<OrderRequestDetailCreateOrConnectWithoutOrderRequestInput>;

    @Field(() => [OrderRequestDetailUpsertWithWhereUniqueWithoutOrderRequestInput], {nullable:true})
    @Type(() => OrderRequestDetailUpsertWithWhereUniqueWithoutOrderRequestInput)
    upsert?: Array<OrderRequestDetailUpsertWithWhereUniqueWithoutOrderRequestInput>;

    @Field(() => OrderRequestDetailCreateManyOrderRequestInputEnvelope, {nullable:true})
    @Type(() => OrderRequestDetailCreateManyOrderRequestInputEnvelope)
    createMany?: OrderRequestDetailCreateManyOrderRequestInputEnvelope;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    set?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    disconnect?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    delete?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    connect?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailUpdateWithWhereUniqueWithoutOrderRequestInput], {nullable:true})
    @Type(() => OrderRequestDetailUpdateWithWhereUniqueWithoutOrderRequestInput)
    update?: Array<OrderRequestDetailUpdateWithWhereUniqueWithoutOrderRequestInput>;

    @Field(() => [OrderRequestDetailUpdateManyWithWhereWithoutOrderRequestInput], {nullable:true})
    @Type(() => OrderRequestDetailUpdateManyWithWhereWithoutOrderRequestInput)
    updateMany?: Array<OrderRequestDetailUpdateManyWithWhereWithoutOrderRequestInput>;

    @Field(() => [OrderRequestDetailScalarWhereInput], {nullable:true})
    @Type(() => OrderRequestDetailScalarWhereInput)
    deleteMany?: Array<OrderRequestDetailScalarWhereInput>;
}
