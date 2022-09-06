import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataCreateManyInput } from './order-arrival-data-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOrderArrivalDataArgs {

    @Field(() => [OrderArrivalDataCreateManyInput], {nullable:false})
    @Type(() => OrderArrivalDataCreateManyInput)
    data!: Array<OrderArrivalDataCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
