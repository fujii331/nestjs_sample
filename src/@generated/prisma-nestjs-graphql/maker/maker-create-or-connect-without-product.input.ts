import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { MakerCreateWithoutProductInput } from './maker-create-without-product.input';

@InputType()
export class MakerCreateOrConnectWithoutProductInput {
  @Field(() => MakerWhereUniqueInput, { nullable: false })
  where!: MakerWhereUniqueInput;

  @Field(() => MakerCreateWithoutProductInput, { nullable: false })
  create!: MakerCreateWithoutProductInput;
}
