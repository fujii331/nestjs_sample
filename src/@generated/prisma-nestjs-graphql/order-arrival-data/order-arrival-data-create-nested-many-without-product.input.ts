import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataCreateWithoutProductInput } from './order-arrival-data-create-without-product.input';
import { Type } from 'class-transformer';
import { OrderArrivalDataCreateOrConnectWithoutProductInput } from './order-arrival-data-create-or-connect-without-product.input';
import { OrderArrivalDataCreateManyProductInputEnvelope } from './order-arrival-data-create-many-product-input-envelope.input';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';

@InputType()
export class OrderArrivalDataCreateNestedManyWithoutProductInput {

    @Field(() => [OrderArrivalDataCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderArrivalDataCreateWithoutProductInput)
    create?: Array<OrderArrivalDataCreateWithoutProductInput>;

    @Field(() => [OrderArrivalDataCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderArrivalDataCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderArrivalDataCreateOrConnectWithoutProductInput>;

    @Field(() => OrderArrivalDataCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderArrivalDataCreateManyProductInputEnvelope)
    createMany?: OrderArrivalDataCreateManyProductInputEnvelope;

    @Field(() => [OrderArrivalDataWhereUniqueInput], {nullable:true})
    @Type(() => OrderArrivalDataWhereUniqueInput)
    connect?: Array<OrderArrivalDataWhereUniqueInput>;
}
