import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailCreateWithoutProductInput } from './order-request-detail-create-without-product.input';
import { OrderRequestDetailCreateOrConnectWithoutProductInput } from './order-request-detail-create-or-connect-without-product.input';
import { OrderRequestDetailUpsertWithWhereUniqueWithoutProductInput } from './order-request-detail-upsert-with-where-unique-without-product.input';
import { OrderRequestDetailCreateManyProductInputEnvelope } from './order-request-detail-create-many-product-input-envelope.input';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { OrderRequestDetailUpdateWithWhereUniqueWithoutProductInput } from './order-request-detail-update-with-where-unique-without-product.input';
import { OrderRequestDetailUpdateManyWithWhereWithoutProductInput } from './order-request-detail-update-many-with-where-without-product.input';
import { OrderRequestDetailScalarWhereInput } from './order-request-detail-scalar-where.input';

@InputType()
export class OrderRequestDetailUncheckedUpdateManyWithoutProductInput {

    @Field(() => [OrderRequestDetailCreateWithoutProductInput], {nullable:true})
    create?: Array<OrderRequestDetailCreateWithoutProductInput>;

    @Field(() => [OrderRequestDetailCreateOrConnectWithoutProductInput], {nullable:true})
    connectOrCreate?: Array<OrderRequestDetailCreateOrConnectWithoutProductInput>;

    @Field(() => [OrderRequestDetailUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    upsert?: Array<OrderRequestDetailUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => OrderRequestDetailCreateManyProductInputEnvelope, {nullable:true})
    createMany?: OrderRequestDetailCreateManyProductInputEnvelope;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    set?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    delete?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    connect?: Array<OrderRequestDetailWhereUniqueInput>;

    @Field(() => [OrderRequestDetailUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    update?: Array<OrderRequestDetailUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [OrderRequestDetailUpdateManyWithWhereWithoutProductInput], {nullable:true})
    updateMany?: Array<OrderRequestDetailUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [OrderRequestDetailScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderRequestDetailScalarWhereInput>;
}
