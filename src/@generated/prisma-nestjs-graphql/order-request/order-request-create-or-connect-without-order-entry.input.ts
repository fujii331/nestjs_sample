import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { Type } from 'class-transformer';
import { OrderRequestCreateWithoutOrderEntryInput } from './order-request-create-without-order-entry.input';

@InputType()
export class OrderRequestCreateOrConnectWithoutOrderEntryInput {

    @Field(() => OrderRequestWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestWhereUniqueInput)
    where!: OrderRequestWhereUniqueInput;

    @Field(() => OrderRequestCreateWithoutOrderEntryInput, {nullable:false})
    @Type(() => OrderRequestCreateWithoutOrderEntryInput)
    create!: OrderRequestCreateWithoutOrderEntryInput;
}
