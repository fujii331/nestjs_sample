import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneOrderArrivalDataArgs {

    @Field(() => OrderArrivalDataWhereUniqueInput, {nullable:false})
    @Type(() => OrderArrivalDataWhereUniqueInput)
    where!: OrderArrivalDataWhereUniqueInput;
}
