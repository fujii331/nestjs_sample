import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueOrderRequestDetailArgs {

    @Field(() => OrderRequestDetailWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    where!: OrderRequestDetailWhereUniqueInput;
}
