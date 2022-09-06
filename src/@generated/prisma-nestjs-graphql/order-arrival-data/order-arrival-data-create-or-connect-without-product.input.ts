import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { Type } from 'class-transformer';
import { OrderArrivalDataCreateWithoutProductInput } from './order-arrival-data-create-without-product.input';

@InputType()
export class OrderArrivalDataCreateOrConnectWithoutProductInput {

    @Field(() => OrderArrivalDataWhereUniqueInput, {nullable:false})
    @Type(() => OrderArrivalDataWhereUniqueInput)
    where!: OrderArrivalDataWhereUniqueInput;

    @Field(() => OrderArrivalDataCreateWithoutProductInput, {nullable:false})
    @Type(() => OrderArrivalDataCreateWithoutProductInput)
    create!: OrderArrivalDataCreateWithoutProductInput;
}
