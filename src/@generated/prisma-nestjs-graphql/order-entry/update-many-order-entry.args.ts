import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryUpdateManyMutationInput } from './order-entry-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OrderEntryWhereInput } from './order-entry-where.input';

@ArgsType()
export class UpdateManyOrderEntryArgs {

    @Field(() => OrderEntryUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderEntryUpdateManyMutationInput)
    data!: OrderEntryUpdateManyMutationInput;

    @Field(() => OrderEntryWhereInput, {nullable:true})
    @Type(() => OrderEntryWhereInput)
    where?: OrderEntryWhereInput;
}
