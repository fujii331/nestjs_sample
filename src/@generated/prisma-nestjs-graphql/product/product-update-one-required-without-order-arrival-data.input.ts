import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderArrivalDataInput } from './product-create-without-order-arrival-data.input';
import { ProductCreateOrConnectWithoutOrderArrivalDataInput } from './product-create-or-connect-without-order-arrival-data.input';
import { ProductUpsertWithoutOrderArrivalDataInput } from './product-upsert-without-order-arrival-data.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutOrderArrivalDataInput } from './product-update-without-order-arrival-data.input';

@InputType()
export class ProductUpdateOneRequiredWithoutOrderArrivalDataInput {

    @Field(() => ProductCreateWithoutOrderArrivalDataInput, {nullable:true})
    create?: ProductCreateWithoutOrderArrivalDataInput;

    @Field(() => ProductCreateOrConnectWithoutOrderArrivalDataInput, {nullable:true})
    connectOrCreate?: ProductCreateOrConnectWithoutOrderArrivalDataInput;

    @Field(() => ProductUpsertWithoutOrderArrivalDataInput, {nullable:true})
    upsert?: ProductUpsertWithoutOrderArrivalDataInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    connect?: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutOrderArrivalDataInput, {nullable:true})
    update?: ProductUpdateWithoutOrderArrivalDataInput;
}
