import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailCreateManyProductInput } from './order-request-detail-create-many-product.input';

@InputType()
export class OrderRequestDetailCreateManyProductInputEnvelope {
  @Field(() => [OrderRequestDetailCreateManyProductInput], { nullable: false })
  data!: Array<OrderRequestDetailCreateManyProductInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
