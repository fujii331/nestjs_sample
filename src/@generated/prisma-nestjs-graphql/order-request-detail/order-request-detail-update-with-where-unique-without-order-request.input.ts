import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailUpdateWithoutOrderRequestInput } from './order-request-detail-update-without-order-request.input';

@InputType()
export class OrderRequestDetailUpdateWithWhereUniqueWithoutOrderRequestInput {

    @Field(() => OrderRequestDetailWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    where!: OrderRequestDetailWhereUniqueInput;

    @Field(() => OrderRequestDetailUpdateWithoutOrderRequestInput, {nullable:false})
    @Type(() => OrderRequestDetailUpdateWithoutOrderRequestInput)
    data!: OrderRequestDetailUpdateWithoutOrderRequestInput;
}
