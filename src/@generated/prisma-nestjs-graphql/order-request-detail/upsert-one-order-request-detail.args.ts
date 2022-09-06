import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailCreateInput } from './order-request-detail-create.input';
import { OrderRequestDetailUpdateInput } from './order-request-detail-update.input';

@ArgsType()
export class UpsertOneOrderRequestDetailArgs {

    @Field(() => OrderRequestDetailWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestDetailWhereUniqueInput)
    where!: OrderRequestDetailWhereUniqueInput;

    @Field(() => OrderRequestDetailCreateInput, {nullable:false})
    @Type(() => OrderRequestDetailCreateInput)
    create!: OrderRequestDetailCreateInput;

    @Field(() => OrderRequestDetailUpdateInput, {nullable:false})
    @Type(() => OrderRequestDetailUpdateInput)
    update!: OrderRequestDetailUpdateInput;
}
