import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderArrivalDataInput } from './product-create-without-order-arrival-data.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOrderArrivalDataInput } from './product-create-or-connect-without-order-arrival-data.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutOrderArrivalDataInput {

    @Field(() => ProductCreateWithoutOrderArrivalDataInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderArrivalDataInput)
    create?: ProductCreateWithoutOrderArrivalDataInput;

    @Field(() => ProductCreateOrConnectWithoutOrderArrivalDataInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderArrivalDataInput)
    connectOrCreate?: ProductCreateOrConnectWithoutOrderArrivalDataInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: ProductWhereUniqueInput;
}
