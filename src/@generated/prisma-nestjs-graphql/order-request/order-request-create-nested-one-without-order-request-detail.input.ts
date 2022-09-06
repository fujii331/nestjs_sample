import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestCreateWithoutOrderRequestDetailInput } from './order-request-create-without-order-request-detail.input';
import { Type } from 'class-transformer';
import { OrderRequestCreateOrConnectWithoutOrderRequestDetailInput } from './order-request-create-or-connect-without-order-request-detail.input';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';

@InputType()
export class OrderRequestCreateNestedOneWithoutOrderRequestDetailInput {

    @Field(() => OrderRequestCreateWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => OrderRequestCreateWithoutOrderRequestDetailInput)
    create?: OrderRequestCreateWithoutOrderRequestDetailInput;

    @Field(() => OrderRequestCreateOrConnectWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => OrderRequestCreateOrConnectWithoutOrderRequestDetailInput)
    connectOrCreate?: OrderRequestCreateOrConnectWithoutOrderRequestDetailInput;

    @Field(() => OrderRequestWhereUniqueInput, {nullable:true})
    @Type(() => OrderRequestWhereUniqueInput)
    connect?: OrderRequestWhereUniqueInput;
}
