import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryScalarWhereInput } from './order-entry-scalar-where.input';
import { Type } from 'class-transformer';
import { OrderEntryUpdateManyMutationInput } from './order-entry-update-many-mutation.input';

@InputType()
export class OrderEntryUpdateManyWithWhereWithoutMakerInput {

    @Field(() => OrderEntryScalarWhereInput, {nullable:false})
    @Type(() => OrderEntryScalarWhereInput)
    where!: OrderEntryScalarWhereInput;

    @Field(() => OrderEntryUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderEntryUpdateManyMutationInput)
    data!: OrderEntryUpdateManyMutationInput;
}
