import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderRequestDetailInput } from './product-create-without-order-request-detail.input';
import { ProductCreateOrConnectWithoutOrderRequestDetailInput } from './product-create-or-connect-without-order-request-detail.input';
import { ProductUpsertWithoutOrderRequestDetailInput } from './product-upsert-without-order-request-detail.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutOrderRequestDetailInput } from './product-update-without-order-request-detail.input';

@InputType()
export class ProductUpdateOneRequiredWithoutOrderRequestDetailInput {

    @Field(() => ProductCreateWithoutOrderRequestDetailInput, {nullable:true})
    create?: ProductCreateWithoutOrderRequestDetailInput;

    @Field(() => ProductCreateOrConnectWithoutOrderRequestDetailInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutOrderRequestDetailInput;

    @Field(() => ProductUpsertWithoutOrderRequestDetailInput, {nullable:true})
    upsert?: ProductUpsertWithoutOrderRequestDetailInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutOrderRequestDetailInput, {nullable:true})
    update?: ProductUpdateWithoutOrderRequestDetailInput;
}
