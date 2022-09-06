import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataUpdateInput } from './order-arrival-data-update.input';
import { Type } from 'class-transformer';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';

@ArgsType()
export class UpdateOneOrderArrivalDataArgs {

    @Field(() => OrderArrivalDataUpdateInput, {nullable:false})
    @Type(() => OrderArrivalDataUpdateInput)
    data!: OrderArrivalDataUpdateInput;

    @Field(() => OrderArrivalDataWhereUniqueInput, {nullable:false})
    @Type(() => OrderArrivalDataWhereUniqueInput)
    where!: OrderArrivalDataWhereUniqueInput;
}
