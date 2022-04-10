import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerUpdateWithoutProductInput } from './maker-update-without-product.input';
import { MakerCreateWithoutProductInput } from './maker-create-without-product.input';

@InputType()
export class MakerUpsertWithoutProductInput {
  @Field(() => MakerUpdateWithoutProductInput, { nullable: false })
  update!: MakerUpdateWithoutProductInput;

  @Field(() => MakerCreateWithoutProductInput, { nullable: false })
  create!: MakerCreateWithoutProductInput;
}
