import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerCreateWithoutProductInput } from './maker-create-without-product.input';
import { MakerCreateOrConnectWithoutProductInput } from './maker-create-or-connect-without-product.input';
import { MakerWhereUniqueInput } from './maker-where-unique.input';

@InputType()
export class MakerCreateNestedOneWithoutProductInput {
  @Field(() => MakerCreateWithoutProductInput, { nullable: true })
  create?: MakerCreateWithoutProductInput;

  @Field(() => MakerCreateOrConnectWithoutProductInput, { nullable: true })
  connectOrCreate?: MakerCreateOrConnectWithoutProductInput;

  @Field(() => MakerWhereUniqueInput, { nullable: true })
  connect?: MakerWhereUniqueInput;
}
