import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryCreateManyMakerInput } from './order-entry-create-many-maker.input';

@InputType()
export class OrderEntryCreateManyMakerInputEnvelope {
  @Field(() => [OrderEntryCreateManyMakerInput], { nullable: false })
  data!: Array<OrderEntryCreateManyMakerInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
