import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailWhereInput } from './order-request-detail-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOrderRequestDetailArgs {

    @Field(() => OrderRequestDetailWhereInput, {nullable:true})
    @Type(() => OrderRequestDetailWhereInput)
    where?: OrderRequestDetailWhereInput;
}
