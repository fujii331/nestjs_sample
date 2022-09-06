import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutMakerInput } from './product-update-without-maker.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutMakerInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutMakerInput, {nullable:false})
    @Type(() => ProductUpdateWithoutMakerInput)
    data!: ProductUpdateWithoutMakerInput;
}
