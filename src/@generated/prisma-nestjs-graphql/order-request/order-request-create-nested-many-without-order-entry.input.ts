import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestCreateWithoutOrderEntryInput } from './order-request-create-without-order-entry.input';
import { Type } from 'class-transformer';
import { OrderRequestCreateOrConnectWithoutOrderEntryInput } from './order-request-create-or-connect-without-order-entry.input';
import { OrderRequestCreateManyOrderEntryInputEnvelope } from './order-request-create-many-order-entry-input-envelope.input';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';

@InputType()
export class OrderRequestCreateNestedManyWithoutOrderEntryInput {

    @Field(() => [OrderRequestCreateWithoutOrderEntryInput], {nullable:true})
    @Type(() => OrderRequestCreateWithoutOrderEntryInput)
    create?: Array<OrderRequestCreateWithoutOrderEntryInput>;

    @Field(() => [OrderRequestCreateOrConnectWithoutOrderEntryInput], {nullable:true})
    @Type(() => OrderRequestCreateOrConnectWithoutOrderEntryInput)
    connectOrCreate?: Array<OrderRequestCreateOrConnectWithoutOrderEntryInput>;

    @Field(() => OrderRequestCreateManyOrderEntryInputEnvelope, {nullable:true})
    @Type(() => OrderRequestCreateManyOrderEntryInputEnvelope)
    createMany?: OrderRequestCreateManyOrderEntryInputEnvelope;

    @Field(() => [OrderRequestWhereUniqueInput], {nullable:true})
    @Type(() => OrderRequestWhereUniqueInput)
    connect?: Array<OrderRequestWhereUniqueInput>;
}
