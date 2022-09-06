import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryCreateWithoutOrderRequestInput } from './order-entry-create-without-order-request.input';
import { Type } from 'class-transformer';
import { OrderEntryCreateOrConnectWithoutOrderRequestInput } from './order-entry-create-or-connect-without-order-request.input';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';

@InputType()
export class OrderEntryCreateNestedOneWithoutOrderRequestInput {

    @Field(() => OrderEntryCreateWithoutOrderRequestInput, {nullable:true})
    @Type(() => OrderEntryCreateWithoutOrderRequestInput)
    create?: OrderEntryCreateWithoutOrderRequestInput;

    @Field(() => OrderEntryCreateOrConnectWithoutOrderRequestInput, {nullable:true})
    @Type(() => OrderEntryCreateOrConnectWithoutOrderRequestInput)
    connectOrCreate?: OrderEntryCreateOrConnectWithoutOrderRequestInput;

    @Field(() => OrderEntryWhereUniqueInput, {nullable:true})
    @Type(() => OrderEntryWhereUniqueInput)
    connect?: OrderEntryWhereUniqueInput;
}
