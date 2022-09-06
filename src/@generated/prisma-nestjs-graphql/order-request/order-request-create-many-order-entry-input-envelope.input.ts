import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestCreateManyOrderEntryInput } from './order-request-create-many-order-entry.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderRequestCreateManyOrderEntryInputEnvelope {

    @Field(() => [OrderRequestCreateManyOrderEntryInput], {nullable:false})
    @Type(() => OrderRequestCreateManyOrderEntryInput)
    data!: Array<OrderRequestCreateManyOrderEntryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
