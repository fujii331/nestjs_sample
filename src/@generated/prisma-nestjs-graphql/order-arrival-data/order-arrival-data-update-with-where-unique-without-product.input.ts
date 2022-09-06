import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { Type } from 'class-transformer';
import { OrderArrivalDataUpdateWithoutProductInput } from './order-arrival-data-update-without-product.input';

@InputType()
export class OrderArrivalDataUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => OrderArrivalDataWhereUniqueInput, {nullable:false})
    @Type(() => OrderArrivalDataWhereUniqueInput)
    where!: OrderArrivalDataWhereUniqueInput;

    @Field(() => OrderArrivalDataUpdateWithoutProductInput, {nullable:false})
    @Type(() => OrderArrivalDataUpdateWithoutProductInput)
    data!: OrderArrivalDataUpdateWithoutProductInput;
}
