import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryCreateWithoutOrderRequestInput } from './order-entry-create-without-order-request.input';
import { Type } from 'class-transformer';
import { OrderEntryCreateOrConnectWithoutOrderRequestInput } from './order-entry-create-or-connect-without-order-request.input';
import { OrderEntryUpsertWithoutOrderRequestInput } from './order-entry-upsert-without-order-request.input';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { OrderEntryUpdateWithoutOrderRequestInput } from './order-entry-update-without-order-request.input';

@InputType()
export class OrderEntryUpdateOneRequiredWithoutOrderRequestNestedInput {

    @Field(() => OrderEntryCreateWithoutOrderRequestInput, {nullable:true})
    @Type(() => OrderEntryCreateWithoutOrderRequestInput)
    create?: OrderEntryCreateWithoutOrderRequestInput;

    @Field(() => OrderEntryCreateOrConnectWithoutOrderRequestInput, {nullable:true})
    @Type(() => OrderEntryCreateOrConnectWithoutOrderRequestInput)
    connectOrCreate?: OrderEntryCreateOrConnectWithoutOrderRequestInput;

    @Field(() => OrderEntryUpsertWithoutOrderRequestInput, {nullable:true})
    @Type(() => OrderEntryUpsertWithoutOrderRequestInput)
    upsert?: OrderEntryUpsertWithoutOrderRequestInput;

    @Field(() => OrderEntryWhereUniqueInput, {nullable:true})
    @Type(() => OrderEntryWhereUniqueInput)
    connect?: OrderEntryWhereUniqueInput;

    @Field(() => OrderEntryUpdateWithoutOrderRequestInput, {nullable:true})
    @Type(() => OrderEntryUpdateWithoutOrderRequestInput)
    update?: OrderEntryUpdateWithoutOrderRequestInput;
}
