import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataCreateWithoutProductInput } from './order-arrival-data-create-without-product.input';
import { Type } from 'class-transformer';
import { OrderArrivalDataCreateOrConnectWithoutProductInput } from './order-arrival-data-create-or-connect-without-product.input';
import { OrderArrivalDataUpsertWithWhereUniqueWithoutProductInput } from './order-arrival-data-upsert-with-where-unique-without-product.input';
import { OrderArrivalDataCreateManyProductInputEnvelope } from './order-arrival-data-create-many-product-input-envelope.input';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { OrderArrivalDataUpdateWithWhereUniqueWithoutProductInput } from './order-arrival-data-update-with-where-unique-without-product.input';
import { OrderArrivalDataUpdateManyWithWhereWithoutProductInput } from './order-arrival-data-update-many-with-where-without-product.input';
import { OrderArrivalDataScalarWhereInput } from './order-arrival-data-scalar-where.input';

@InputType()
export class OrderArrivalDataUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [OrderArrivalDataCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderArrivalDataCreateWithoutProductInput)
    create?: Array<OrderArrivalDataCreateWithoutProductInput>;

    @Field(() => [OrderArrivalDataCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderArrivalDataCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderArrivalDataCreateOrConnectWithoutProductInput>;

    @Field(() => [OrderArrivalDataUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderArrivalDataUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<OrderArrivalDataUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => OrderArrivalDataCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderArrivalDataCreateManyProductInputEnvelope)
    createMany?: OrderArrivalDataCreateManyProductInputEnvelope;

    @Field(() => [OrderArrivalDataWhereUniqueInput], {nullable:true})
    @Type(() => OrderArrivalDataWhereUniqueInput)
    set?: Array<OrderArrivalDataWhereUniqueInput>;

    @Field(() => [OrderArrivalDataWhereUniqueInput], {nullable:true})
    @Type(() => OrderArrivalDataWhereUniqueInput)
    disconnect?: Array<OrderArrivalDataWhereUniqueInput>;

    @Field(() => [OrderArrivalDataWhereUniqueInput], {nullable:true})
    @Type(() => OrderArrivalDataWhereUniqueInput)
    delete?: Array<OrderArrivalDataWhereUniqueInput>;

    @Field(() => [OrderArrivalDataWhereUniqueInput], {nullable:true})
    @Type(() => OrderArrivalDataWhereUniqueInput)
    connect?: Array<OrderArrivalDataWhereUniqueInput>;

    @Field(() => [OrderArrivalDataUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => OrderArrivalDataUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<OrderArrivalDataUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [OrderArrivalDataUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => OrderArrivalDataUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<OrderArrivalDataUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [OrderArrivalDataScalarWhereInput], {nullable:true})
    @Type(() => OrderArrivalDataScalarWhereInput)
    deleteMany?: Array<OrderArrivalDataScalarWhereInput>;
}
