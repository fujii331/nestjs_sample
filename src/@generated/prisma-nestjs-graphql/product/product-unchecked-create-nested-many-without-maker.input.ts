import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutMakerInput } from './product-create-without-maker.input';
import { ProductCreateOrConnectWithoutMakerInput } from './product-create-or-connect-without-maker.input';
import { ProductCreateManyMakerInputEnvelope } from './product-create-many-maker-input-envelope.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutMakerInput {
  @Field(() => [ProductCreateWithoutMakerInput], { nullable: true })
  create?: Array<ProductCreateWithoutMakerInput>;

  @Field(() => [ProductCreateOrConnectWithoutMakerInput], { nullable: true })
  connectOrCreate?: Array<ProductCreateOrConnectWithoutMakerInput>;

  @Field(() => ProductCreateManyMakerInputEnvelope, { nullable: true })
  createMany?: ProductCreateManyMakerInputEnvelope;

  @Field(() => [ProductWhereUniqueInput], { nullable: true })
  connect?: Array<ProductWhereUniqueInput>;
}
