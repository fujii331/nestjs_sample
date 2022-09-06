import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailCreateWithoutProductInput } from './order-request-detail-create-without-product.input';

@InputType()
export class OrderRequestDetailCreateOrConnectWithoutProductInput {

    @Field(() => OrderRequestDetailWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    where!: OrderRequestDetailWhereUniqueInput;

    @Field(() => OrderRequestDetailCreateWithoutProductInput, {nullable:false})
    @Type(() => OrderRequestDetailCreateWithoutProductInput)
    create!: OrderRequestDetailCreateWithoutProductInput;
}
