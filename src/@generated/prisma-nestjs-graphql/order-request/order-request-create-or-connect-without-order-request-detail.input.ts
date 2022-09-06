import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { Type } from 'class-transformer';
import { OrderRequestCreateWithoutOrderRequestDetailInput } from './order-request-create-without-order-request-detail.input';

@InputType()
export class OrderRequestCreateOrConnectWithoutOrderRequestDetailInput {

    @Field(() => OrderRequestWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestWhereUniqueInput)
    where!: OrderRequestWhereUniqueInput;

    @Field(() => OrderRequestCreateWithoutOrderRequestDetailInput, {nullable:false})
    @Type(() => OrderRequestCreateWithoutOrderRequestDetailInput)
    create!: OrderRequestCreateWithoutOrderRequestDetailInput;
}
