import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderRequestDetailInput } from './product-create-without-order-request-detail.input';
import { ProductCreateOrConnectWithoutOrderRequestDetailInput } from './product-create-or-connect-without-order-request-detail.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutOrderRequestDetailInput {
  @Field(() => ProductCreateWithoutOrderRequestDetailInput, { nullable: true })
  create?: ProductCreateWithoutOrderRequestDetailInput;

  @Field(() => ProductCreateOrConnectWithoutOrderRequestDetailInput, {
    nullable: true,
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOrderRequestDetailInput;

  @Field(() => ProductWhereUniqueInput, { nullable: true })
  connect?: ProductWhereUniqueInput;
}
