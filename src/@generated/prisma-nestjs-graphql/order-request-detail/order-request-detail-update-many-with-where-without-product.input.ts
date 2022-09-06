import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailScalarWhereInput } from './order-request-detail-scalar-where.input';
import { Type } from 'class-transformer';
import { OrderRequestDetailUpdateManyMutationInput } from './order-request-detail-update-many-mutation.input';

@InputType()
export class OrderRequestDetailUpdateManyWithWhereWithoutProductInput {

    @Field(() => OrderRequestDetailScalarWhereInput, {nullable:false})
    @Type(() => OrderRequestDetailScalarWhereInput)
    where!: OrderRequestDetailScalarWhereInput;

    @Field(() => OrderRequestDetailUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderRequestDetailUpdateManyMutationInput)
    data!: OrderRequestDetailUpdateManyMutationInput;
}
