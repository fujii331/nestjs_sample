import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderRequestDetailInput } from './product-create-without-order-request-detail.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOrderRequestDetailInput } from './product-create-or-connect-without-order-request-detail.input';
import { ProductUpsertWithoutOrderRequestDetailInput } from './product-upsert-without-order-request-detail.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutOrderRequestDetailInput } from './product-update-without-order-request-detail.input';

@InputType()
export class ProductUpdateOneRequiredWithoutOrderRequestDetailNestedInput {

    @Field(() => ProductCreateWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderRequestDetailInput)
    create?: ProductCreateWithoutOrderRequestDetailInput;

    @Field(() => ProductCreateOrConnectWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderRequestDetailInput)
    connectOrCreate?: ProductCreateOrConnectWithoutOrderRequestDetailInput;

    @Field(() => ProductUpsertWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => ProductUpsertWithoutOrderRequestDetailInput)
    upsert?: ProductUpsertWithoutOrderRequestDetailInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => ProductUpdateWithoutOrderRequestDetailInput)
    update?: ProductUpdateWithoutOrderRequestDetailInput;
}
