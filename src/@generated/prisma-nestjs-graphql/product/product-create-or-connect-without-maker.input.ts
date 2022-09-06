import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutMakerInput } from './product-create-without-maker.input';

@InputType()
export class ProductCreateOrConnectWithoutMakerInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: ProductWhereUniqueInput;

    @Field(() => ProductCreateWithoutMakerInput, {nullable:false})
    @Type(() => ProductCreateWithoutMakerInput)
    create!: ProductCreateWithoutMakerInput;
}
