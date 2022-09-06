import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestWhereInput } from './order-request-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOrderRequestArgs {

    @Field(() => OrderRequestWhereInput, {nullable:true})
    @Type(() => OrderRequestWhereInput)
    where?: OrderRequestWhereInput;
}
