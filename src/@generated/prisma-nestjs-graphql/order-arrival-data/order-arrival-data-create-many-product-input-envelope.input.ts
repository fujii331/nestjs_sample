import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderArrivalDataCreateManyProductInput } from './order-arrival-data-create-many-product.input';

@InputType()
export class OrderArrivalDataCreateManyProductInputEnvelope {
  @Field(() => [OrderArrivalDataCreateManyProductInput], { nullable: false })
  data!: Array<OrderArrivalDataCreateManyProductInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
