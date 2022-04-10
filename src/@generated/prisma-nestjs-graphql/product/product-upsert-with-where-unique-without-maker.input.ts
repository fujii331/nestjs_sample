import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutMakerInput } from './product-update-without-maker.input';
import { ProductCreateWithoutMakerInput } from './product-create-without-maker.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutMakerInput {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;

  @Field(() => ProductUpdateWithoutMakerInput, { nullable: false })
  update!: ProductUpdateWithoutMakerInput;

  @Field(() => ProductCreateWithoutMakerInput, { nullable: false })
  create!: ProductCreateWithoutMakerInput;
}
