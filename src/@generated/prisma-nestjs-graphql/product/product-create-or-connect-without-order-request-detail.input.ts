import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutOrderRequestDetailInput } from './product-create-without-order-request-detail.input';

@InputType()
export class ProductCreateOrConnectWithoutOrderRequestDetailInput {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;

  @Field(() => ProductCreateWithoutOrderRequestDetailInput, { nullable: false })
  create!: ProductCreateWithoutOrderRequestDetailInput;
}
