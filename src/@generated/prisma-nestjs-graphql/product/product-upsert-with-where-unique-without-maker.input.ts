import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutMakerInput } from './product-update-without-maker.input';
import { ProductCreateWithoutMakerInput } from './product-create-without-maker.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutMakerInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: ProductWhereUniqueInput;

    @Field(() => ProductUpdateWithoutMakerInput, {nullable:false})
    @Type(() => ProductUpdateWithoutMakerInput)
    update!: ProductUpdateWithoutMakerInput;

    @Field(() => ProductCreateWithoutMakerInput, {nullable:false})
    @Type(() => ProductCreateWithoutMakerInput)
    create!: ProductCreateWithoutMakerInput;
}
