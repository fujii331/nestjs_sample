import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailUpdateWithoutOrderRequestInput } from './order-request-detail-update-without-order-request.input';
import { OrderRequestDetailCreateWithoutOrderRequestInput } from './order-request-detail-create-without-order-request.input';

@InputType()
export class OrderRequestDetailUpsertWithWhereUniqueWithoutOrderRequestInput {

    @Field(() => OrderRequestDetailWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    where!: OrderRequestDetailWhereUniqueInput;

    @Field(() => OrderRequestDetailUpdateWithoutOrderRequestInput, {nullable:false})
    @Type(() => OrderRequestDetailUpdateWithoutOrderRequestInput)
    update!: OrderRequestDetailUpdateWithoutOrderRequestInput;

    @Field(() => OrderRequestDetailCreateWithoutOrderRequestInput, {nullable:false})
    @Type(() => OrderRequestDetailCreateWithoutOrderRequestInput)
    create!: OrderRequestDetailCreateWithoutOrderRequestInput;
}
