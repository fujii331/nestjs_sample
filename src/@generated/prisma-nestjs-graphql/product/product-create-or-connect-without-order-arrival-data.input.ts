import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOrderArrivalDataInput } from './product-create-without-order-arrival-data.input';

@InputType()
export class ProductCreateOrConnectWithoutOrderArrivalDataInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutOrderArrivalDataInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderArrivalDataInput)
    create!: ProductCreateWithoutOrderArrivalDataInput;
}
