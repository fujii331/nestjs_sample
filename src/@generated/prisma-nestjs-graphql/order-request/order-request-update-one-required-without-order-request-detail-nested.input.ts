import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestCreateWithoutOrderRequestDetailInput } from './order-request-create-without-order-request-detail.input';
import { Type } from 'class-transformer';
import { OrderRequestCreateOrConnectWithoutOrderRequestDetailInput } from './order-request-create-or-connect-without-order-request-detail.input';
import { OrderRequestUpsertWithoutOrderRequestDetailInput } from './order-request-upsert-without-order-request-detail.input';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { OrderRequestUpdateWithoutOrderRequestDetailInput } from './order-request-update-without-order-request-detail.input';

@InputType()
export class OrderRequestUpdateOneRequiredWithoutOrderRequestDetailNestedInput {

    @Field(() => OrderRequestCreateWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => OrderRequestCreateWithoutOrderRequestDetailInput)
    create?: OrderRequestCreateWithoutOrderRequestDetailInput;

    @Field(() => OrderRequestCreateOrConnectWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => OrderRequestCreateOrConnectWithoutOrderRequestDetailInput)
    connectOrCreate?: OrderRequestCreateOrConnectWithoutOrderRequestDetailInput;

    @Field(() => OrderRequestUpsertWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => OrderRequestUpsertWithoutOrderRequestDetailInput)
    upsert?: OrderRequestUpsertWithoutOrderRequestDetailInput;

    @Field(() => OrderRequestWhereUniqueInput, {nullable:true})
    @Type(() => OrderRequestWhereUniqueInput)
    connect?: OrderRequestWhereUniqueInput;

    @Field(() => OrderRequestUpdateWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => OrderRequestUpdateWithoutOrderRequestDetailInput)
    update?: OrderRequestUpdateWithoutOrderRequestDetailInput;
}
