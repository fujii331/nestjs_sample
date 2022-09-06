import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataScalarWhereInput } from './order-arrival-data-scalar-where.input';
import { Type } from 'class-transformer';
import { OrderArrivalDataUpdateManyMutationInput } from './order-arrival-data-update-many-mutation.input';

@InputType()
export class OrderArrivalDataUpdateManyWithWhereWithoutProductInput {

    @Field(() => OrderArrivalDataScalarWhereInput, {nullable:false})
    @Type(() => OrderArrivalDataScalarWhereInput)
    where!: OrderArrivalDataScalarWhereInput;

    @Field(() => OrderArrivalDataUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderArrivalDataUpdateManyMutationInput)
    data!: OrderArrivalDataUpdateManyMutationInput;
}
