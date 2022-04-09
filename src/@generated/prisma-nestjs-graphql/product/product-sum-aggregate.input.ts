import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  ssp180Days?: true;

  @Field(() => Boolean, { nullable: true })
  carton3SideSize?: true;

  @Field(() => Boolean, { nullable: true })
  minOrderQuantity?: true;
}
