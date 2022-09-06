import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailUpdateInput } from './order-request-detail-update.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';

@ArgsType()
export class UpdateOneOrderRequestDetailArgs {

    @Field(() => OrderRequestDetailUpdateInput, {nullable:false})
    @Type(() => OrderRequestDetailUpdateInput)
    data!: OrderRequestDetailUpdateInput;

    @Field(() => OrderRequestDetailWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    where!: OrderRequestDetailWhereUniqueInput;
}
