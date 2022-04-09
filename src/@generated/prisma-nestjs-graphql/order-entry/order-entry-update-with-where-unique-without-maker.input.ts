import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { OrderEntryUpdateWithoutMakerInput } from './order-entry-update-without-maker.input';

@InputType()
export class OrderEntryUpdateWithWhereUniqueWithoutMakerInput {
  @Field(() => OrderEntryWhereUniqueInput, { nullable: false })
  where!: OrderEntryWhereUniqueInput;

  @Field(() => OrderEntryUpdateWithoutMakerInput, { nullable: false })
  data!: OrderEntryUpdateWithoutMakerInput;
}
