import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutOrderRequestDetailInput } from './product-update-without-order-request-detail.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOrderRequestDetailInput } from './product-create-without-order-request-detail.input';

@InputType()
export class ProductUpsertWithoutOrderRequestDetailInput {

    @Field(() => ProductUpdateWithoutOrderRequestDetailInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOrderRequestDetailInput)
    update!: ProductUpdateWithoutOrderRequestDetailInput;

    @Field(() => ProductCreateWithoutOrderRequestDetailInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderRequestDetailInput)
    create!: ProductCreateWithoutOrderRequestDetailInput;
}
