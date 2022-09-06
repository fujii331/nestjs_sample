import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataWhereInput } from './order-arrival-data-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOrderArrivalDataArgs {

    @Field(() => OrderArrivalDataWhereInput, {nullable:true})
    @Type(() => OrderArrivalDataWhereInput)
    where?: OrderArrivalDataWhereInput;
}
