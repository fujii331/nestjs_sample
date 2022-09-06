import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailCreateWithoutOrderRequestInput } from './order-request-detail-create-without-order-request.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailCreateOrConnectWithoutOrderRequestInput } from './order-request-detail-create-or-connect-without-order-request.input';
import { OrderRequestDetailCreateManyOrderRequestInputEnvelope } from './order-request-detail-create-many-order-request-input-envelope.input';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';

@InputType()
export class OrderRequestDetailUncheckedCreateNestedManyWithoutOrderRequestInput {

    @Field(() => [OrderRequestDetailCreateWithoutOrderRequestInput], {nullable:true})
    @Type(() => OrderRequestDetailCreateWithoutOrderRequestInput)
    create?: Array<OrderRequestDetailCreateWithoutOrderRequestInput>;

    @Field(() => [OrderRequestDetailCreateOrConnectWithoutOrderRequestInput], {nullable:true})
    @Type(() => OrderRequestDetailCreateOrConnectWithoutOrderRequestInput)
    connectOrCreate?: Array<OrderRequestDetailCreateOrConnectWithoutOrderRequestInput>;

    @Field(() => OrderRequestDetailCreateManyOrderRequestInputEnvelope, {nullable:true})
    @Type(() => OrderRequestDetailCreateManyOrderRequestInputEnvelope)
    createMany?: OrderRequestDetailCreateManyOrderRequestInputEnvelope;

    @Field(() => [OrderRequestDetailWhereUniqueInput], {nullable:true})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    connect?: Array<OrderRequestDetailWhereUniqueInput>;
}
