import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MakerSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  leadtime?: true;
}
