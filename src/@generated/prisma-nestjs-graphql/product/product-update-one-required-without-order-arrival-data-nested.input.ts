import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderArrivalDataInput } from './product-create-without-order-arrival-data.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOrderArrivalDataInput } from './product-create-or-connect-without-order-arrival-data.input';
import { ProductUpsertWithoutOrderArrivalDataInput } from './product-upsert-without-order-arrival-data.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutOrderArrivalDataInput } from './product-update-without-order-arrival-data.input';

@InputType()
export class ProductUpdateOneRequiredWithoutOrderArrivalDataNestedInput {

    @Field(() => ProductCreateWithoutOrderArrivalDataInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderArrivalDataInput)
    create?: ProductCreateWithoutOrderArrivalDataInput;

    @Field(() => ProductCreateOrConnectWithoutOrderArrivalDataInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderArrivalDataInput)
    connectOrCreate?: ProductCreateOrConnectWithoutOrderArrivalDataInput;

    @Field(() => ProductUpsertWithoutOrderArrivalDataInput, {nullable:true})
    @Type(() => ProductUpsertWithoutOrderArrivalDataInput)
    upsert?: ProductUpsertWithoutOrderArrivalDataInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutOrderArrivalDataInput, {nullable:true})
    @Type(() => ProductUpdateWithoutOrderArrivalDataInput)
    update?: ProductUpdateWithoutOrderArrivalDataInput;
}
