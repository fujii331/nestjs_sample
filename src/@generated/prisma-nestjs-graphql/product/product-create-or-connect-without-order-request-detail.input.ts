import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOrderRequestDetailInput } from './product-create-without-order-request-detail.input';

@InputType()
export class ProductCreateOrConnectWithoutOrderRequestDetailInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutOrderRequestDetailInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderRequestDetailInput)
    create!: ProductCreateWithoutOrderRequestDetailInput;
}
