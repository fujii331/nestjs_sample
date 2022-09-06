import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { Type } from 'class-transformer';
import { OrderRequestCreateInput } from './order-request-create.input';
import { OrderRequestUpdateInput } from './order-request-update.input';

@ArgsType()
export class UpsertOneOrderRequestArgs {

    @Field(() => OrderRequestWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestWhereUniqueInput)
    where!: OrderRequestWhereUniqueInput;

    @Field(() => OrderRequestCreateInput, {nullable:false})
    @Type(() => OrderRequestCreateInput)
    create!: OrderRequestCreateInput;

    @Field(() => OrderRequestUpdateInput, {nullable:false})
    @Type(() => OrderRequestUpdateInput)
    update!: OrderRequestUpdateInput;
}
