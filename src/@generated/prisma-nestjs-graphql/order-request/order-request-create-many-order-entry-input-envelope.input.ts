import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestCreateManyOrderEntryInput } from './order-request-create-many-order-entry.input';

@InputType()
export class OrderRequestCreateManyOrderEntryInputEnvelope {
  @Field(() => [OrderRequestCreateManyOrderEntryInput], { nullable: false })
  data!: Array<OrderRequestCreateManyOrderEntryInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
