import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailCreateWithoutOrderRequestInput } from './order-request-detail-create-without-order-request.input';

@InputType()
export class OrderRequestDetailCreateOrConnectWithoutOrderRequestInput {

    @Field(() => OrderRequestDetailWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    where!: OrderRequestDetailWhereUniqueInput;

    @Field(() => OrderRequestDetailCreateWithoutOrderRequestInput, {nullable:false})
    @Type(() => OrderRequestDetailCreateWithoutOrderRequestInput)
    create!: OrderRequestDetailCreateWithoutOrderRequestInput;
}
