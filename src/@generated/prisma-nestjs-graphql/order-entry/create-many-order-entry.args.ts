import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryCreateManyInput } from './order-entry-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOrderEntryArgs {

    @Field(() => [OrderEntryCreateManyInput], {nullable:false})
    @Type(() => OrderEntryCreateManyInput)
    data!: Array<OrderEntryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
