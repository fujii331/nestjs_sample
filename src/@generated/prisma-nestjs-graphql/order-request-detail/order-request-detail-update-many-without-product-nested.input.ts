import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailCreateWithoutProductInput } from './order-request-detail-create-without-product.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailCreateOrConnectWithoutProductInput } from './order-request-detail-create-or-connect-without-product.input';
import { OrderRequestDetailUpsertWithWhereUniqueWithoutProductInput } from './order-request-detail-upsert-with-where-unique-without-product.input';
import { OrderRequestDetailCreateManyProductInputEnvelope } from './order-request-detail-create-many-product-input-envelope.input';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { OrderRequestDetailUpdateWithWhereUniqueWithoutProductInput } from './order-request-detail-update-with-where-unique-without-product.input';
import { OrderRequestDetailUpdateManyWithWhereWithoutProductInput } from './order-request-detail-update-many-with-where-without-product.input';
import { OrderRequestDetailScalarWhereInput } from './order-request-detail-scalar-where.input';

@InputType()
export class OrderRequestDetailUpdateManyWithoutProductNestedInput {

    @Field(() => [OrderRequestDetailCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderRequestDetailCreateWithoutProductInput)
    create?: Array<OrderRequestDetailCreateWithoutProductInput>;

    @Field(() => [OrderRequestDetailCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderRequestDetailCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderRequestDetailCreateOrConnectWithoutProductInput>;

    @Field(() => [OrderRequestDetailUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderRequestDetailUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<OrderRequestDetailUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => OrderRequestDetailCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderRequestDetailCreateManyProductInputEnvelope)
    createMany?: OrderRequestDetailCreateManyProductInputEnvelope;

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

    @Field(() => [OrderRequestDetailUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderRequestDetailUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<OrderRequestDetailUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [OrderRequestDetailUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => OrderRequestDetailUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<OrderRequestDetailUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [OrderRequestDetailScalarWhereInput], {nullable:true})
    @Type(() => OrderRequestDetailScalarWhereInput)
    deleteMany?: Array<OrderRequestDetailScalarWhereInput>;
}
