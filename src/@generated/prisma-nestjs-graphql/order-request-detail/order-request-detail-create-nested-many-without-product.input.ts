import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailCreateWithoutProductInput } from './order-request-detail-create-without-product.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailCreateOrConnectWithoutProductInput } from './order-request-detail-create-or-connect-without-product.input';
import { OrderRequestDetailCreateManyProductInputEnvelope } from './order-request-detail-create-many-product-input-envelope.input';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';

@InputType()
export class OrderRequestDetailCreateNestedManyWithoutProductInput {

    @Field(() => [OrderRequestDetailCreateWithoutProductInput], {nullable:true})
    @Type(() => OrderRequestDetailCreateWithoutProductInput)
    create?: Array<OrderRequestDetailCreateWithoutProductInput>;

    @Field(() => [OrderRequestDetailCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => OrderRequestDetailCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<OrderRequestDetailCreateOrConnectWithoutProductInput>;

    @Field(() => OrderRequestDetailCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => OrderRequestDetailCreateManyProductInputEnvelope)
    createMany?: OrderRequestDetailCreateManyProductInputEnvelope;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    connect?: Array<OrderRequestDetailWhereUniqueInput>;
}
