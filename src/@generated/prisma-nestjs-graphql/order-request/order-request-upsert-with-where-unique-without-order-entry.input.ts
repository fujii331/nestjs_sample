import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { Type } from 'class-transformer';
import { OrderRequestUpdateWithoutOrderEntryInput } from './order-request-update-without-order-entry.input';
import { OrderRequestCreateWithoutOrderEntryInput } from './order-request-create-without-order-entry.input';

@InputType()
export class OrderRequestUpsertWithWhereUniqueWithoutOrderEntryInput {

    @Field(() => OrderRequestWhereUniqueInput, {nullable:false})
    @Type(() => OrderRequestWhereUniqueInput)
    where!: OrderRequestWhereUniqueInput;

    @Field(() => OrderRequestUpdateWithoutOrderEntryInput, {nullable:false})
    @Type(() => OrderRequestUpdateWithoutOrderEntryInput)
    update!: OrderRequestUpdateWithoutOrderEntryInput;

    @Field(() => OrderRequestCreateWithoutOrderEntryInput, {nullable:false})
    @Type(() => OrderRequestCreateWithoutOrderEntryInput)
    create!: OrderRequestCreateWithoutOrderEntryInput;
}
