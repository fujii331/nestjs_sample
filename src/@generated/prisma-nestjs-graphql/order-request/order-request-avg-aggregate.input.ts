import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderRequestAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  containerNo?: true;

  @Field(() => Boolean, { nullable: true })
  OrderEntryId?: true;
}
