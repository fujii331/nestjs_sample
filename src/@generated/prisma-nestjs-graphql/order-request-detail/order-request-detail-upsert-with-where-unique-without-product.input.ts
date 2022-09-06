import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailUpdateWithoutProductInput } from './order-request-detail-update-without-product.input';
import { OrderRequestDetailCreateWithoutProductInput } from './order-request-detail-create-without-product.input';

@InputType()
export class OrderRequestDetailUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => OrderRequestDetailWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    where!: OrderRequestDetailWhereUniqueInput;

    @Field(() => OrderRequestDetailUpdateWithoutProductInput, {nullable:false})
    @Type(() => OrderRequestDetailUpdateWithoutProductInput)
    update!: OrderRequestDetailUpdateWithoutProductInput;

    @Field(() => OrderRequestDetailCreateWithoutProductInput, {nullable:false})
    @Type(() => OrderRequestDetailCreateWithoutProductInput)
    create!: OrderRequestDetailCreateWithoutProductInput;
}
