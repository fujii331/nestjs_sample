import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerCreateWithoutProductInput } from './maker-create-without-product.input';
import { MakerCreateOrConnectWithoutProductInput } from './maker-create-or-connect-without-product.input';
import { MakerUpsertWithoutProductInput } from './maker-upsert-without-product.input';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { MakerUpdateWithoutProductInput } from './maker-update-without-product.input';

@InputType()
export class MakerUpdateOneRequiredWithoutProductInput {
  @Field(() => MakerCreateWithoutProductInput, { nullable: true })
  create?: MakerCreateWithoutProductInput;

  @Field(() => MakerCreateOrConnectWithoutProductInput, { nullable: true })
  connectOrCreate?: MakerCreateOrConnectWithoutProductInput;

  @Field(() => MakerUpsertWithoutProductInput, { nullable: true })
  upsert?: MakerUpsertWithoutProductInput;

  @Field(() => MakerWhereUniqueInput, { nullable: true })
  connect?: MakerWhereUniqueInput;

  @Field(() => MakerUpdateWithoutProductInput, { nullable: true })
  update?: MakerUpdateWithoutProductInput;
}
