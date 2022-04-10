import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithoutMakerInput } from './product-update-without-maker.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutMakerInput {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;

  @Field(() => ProductUpdateWithoutMakerInput, { nullable: false })
  data!: ProductUpdateWithoutMakerInput;
}
