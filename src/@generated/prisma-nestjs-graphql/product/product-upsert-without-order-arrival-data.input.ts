import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutOrderArrivalDataInput } from './product-update-without-order-arrival-data.input';
import { ProductCreateWithoutOrderArrivalDataInput } from './product-create-without-order-arrival-data.input';

@InputType()
export class ProductUpsertWithoutOrderArrivalDataInput {
  @Field(() => ProductUpdateWithoutOrderArrivalDataInput, { nullable: false })
  update!: ProductUpdateWithoutOrderArrivalDataInput;

  @Field(() => ProductCreateWithoutOrderArrivalDataInput, { nullable: false })
  create!: ProductCreateWithoutOrderArrivalDataInput;
}
