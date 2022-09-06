import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderRequestDetailInput } from './product-create-without-order-request-detail.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOrderRequestDetailInput } from './product-create-or-connect-without-order-request-detail.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutOrderRequestDetailInput {

    @Field(() => ProductCreateWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderRequestDetailInput)
    create?: ProductCreateWithoutOrderRequestDetailInput;

    @Field(() => ProductCreateOrConnectWithoutOrderRequestDetailInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderRequestDetailInput)
    connectOrCreate?: ProductCreateOrConnectWithoutOrderRequestDetailInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: ProductWhereUniqueInput;
}
