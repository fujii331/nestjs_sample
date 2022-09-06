import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { Type } from 'class-transformer';
import { OrderArrivalDataCreateInput } from './order-arrival-data-create.input';
import { OrderArrivalDataUpdateInput } from './order-arrival-data-update.input';

@ArgsType()
export class UpsertOneOrderArrivalDataArgs {

    @Field(() => OrderArrivalDataWhereUniqueInput, {nullable:false})
    @Type(() => OrderArrivalDataWhereUniqueInput)
    where!: OrderArrivalDataWhereUniqueInput;

    @Field(() => OrderArrivalDataCreateInput, {nullable:false})
    @Type(() => OrderArrivalDataCreateInput)
    create!: OrderArrivalDataCreateInput;

    @Field(() => OrderArrivalDataUpdateInput, {nullable:false})
    @Type(() => OrderArrivalDataUpdateInput)
    update!: OrderArrivalDataUpdateInput;
}
