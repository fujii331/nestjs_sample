import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutOrderArrivalDataInput } from './product-update-without-order-arrival-data.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOrderArrivalDataInput } from './product-create-without-order-arrival-data.input';

@InputType()
export class ProductUpsertWithoutOrderArrivalDataInput {

    @Field(() => ProductUpdateWithoutOrderArrivalDataInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOrderArrivalDataInput)
    update!: ProductUpdateWithoutOrderArrivalDataInput;

    @Field(() => ProductCreateWithoutOrderArrivalDataInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderArrivalDataInput)
    create!: ProductCreateWithoutOrderArrivalDataInput;
}
