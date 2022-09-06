import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { Type } from 'class-transformer';
import { OrderArrivalDataUpdateWithoutProductInput } from './order-arrival-data-update-without-product.input';
import { OrderArrivalDataCreateWithoutProductInput } from './order-arrival-data-create-without-product.input';

@InputType()
export class OrderArrivalDataUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => OrderArrivalDataWhereUniqueInput, {nullable:false})
    @Type(() => OrderArrivalDataWhereUniqueInput)
    where!: OrderArrivalDataWhereUniqueInput;

    @Field(() => OrderArrivalDataUpdateWithoutProductInput, {nullable:false})
    @Type(() => OrderArrivalDataUpdateWithoutProductInput)
    update!: OrderArrivalDataUpdateWithoutProductInput;

    @Field(() => OrderArrivalDataCreateWithoutProductInput, {nullable:false})
    @Type(() => OrderArrivalDataCreateWithoutProductInput)
    create!: OrderArrivalDataCreateWithoutProductInput;
}
