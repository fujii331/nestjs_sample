import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderArrivalDataInput } from './product-create-without-order-arrival-data.input';
import { ProductCreateOrConnectWithoutOrderArrivalDataInput } from './product-create-or-connect-without-order-arrival-data.input';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutOrderArrivalDataInput {
  @Field(() => ProductCreateWithoutOrderArrivalDataInput, { nullable: true })
  create?: ProductCreateWithoutOrderArrivalDataInput;

  @Field(() => ProductCreateOrConnectWithoutOrderArrivalDataInput, {
    nullable: true,
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOrderArrivalDataInput;

  @Field(() => ProductWhereUniqueInput, { nullable: true })
  connect?: ProductWhereUniqueInput;
}
