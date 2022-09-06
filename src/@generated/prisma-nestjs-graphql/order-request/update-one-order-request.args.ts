import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestUpdateInput } from './order-request-update.input';
import { Type } from 'class-transformer';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';

@ArgsType()
export class UpdateOneOrderRequestArgs {

    @Field(() => OrderRequestUpdateInput, {nullable:false})
    @Type(() => OrderRequestUpdateInput)
    data!: OrderRequestUpdateInput;

    @Field(() => OrderRequestWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestWhereUniqueInput)
    where!: OrderRequestWhereUniqueInput;
}
