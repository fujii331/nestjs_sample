import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailCreateManyOrderRequestInput } from './order-request-detail-create-many-order-request.input';

@InputType()
export class OrderRequestDetailCreateManyOrderRequestInputEnvelope {
  @Field(() => [OrderRequestDetailCreateManyOrderRequestInput], {
    nullable: false,
  })
  data!: Array<OrderRequestDetailCreateManyOrderRequestInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
