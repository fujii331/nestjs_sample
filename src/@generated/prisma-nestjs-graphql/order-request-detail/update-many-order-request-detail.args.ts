import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailUpdateManyMutationInput } from './order-request-detail-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailWhereInput } from './order-request-detail-where.input';

@ArgsType()
export class UpdateManyOrderRequestDetailArgs {

    @Field(() => OrderRequestDetailUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderRequestDetailUpdateManyMutationInput)
    data!: OrderRequestDetailUpdateManyMutationInput;

    @Field(() => OrderRequestDetailWhereInput, {nullable:true})
    @Type(() => OrderRequestDetailWhereInput)
    where?: OrderRequestDetailWhereInput;
}
