import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductCreateWithoutOrderArrivalDataInput } from './product-create-without-order-arrival-data.input';

@InputType()
export class ProductCreateOrConnectWithoutOrderArrivalDataInput {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;

  @Field(() => ProductCreateWithoutOrderArrivalDataInput, { nullable: false })
  create!: ProductCreateWithoutOrderArrivalDataInput;
}
