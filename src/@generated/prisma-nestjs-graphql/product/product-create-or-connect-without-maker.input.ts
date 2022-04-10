import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutMakerInput } from './product-create-without-maker.input';

@InputType()
export class ProductCreateOrConnectWithoutMakerInput {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;

  @Field(() => ProductCreateWithoutMakerInput, { nullable: false })
  create!: ProductCreateWithoutMakerInput;
}
