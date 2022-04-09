import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerCreateWithoutOrderEntryInput } from './maker-create-without-order-entry.input';
import { MakerCreateOrConnectWithoutOrderEntryInput } from './maker-create-or-connect-without-order-entry.input';
import { MakerWhereUniqueInput } from './maker-where-unique.input';

@InputType()
export class MakerCreateNestedOneWithoutOrderEntryInput {
  @Field(() => MakerCreateWithoutOrderEntryInput, { nullable: true })
  create?: MakerCreateWithoutOrderEntryInput;

  @Field(() => MakerCreateOrConnectWithoutOrderEntryInput, { nullable: true })
  connectOrCreate?: MakerCreateOrConnectWithoutOrderEntryInput;

  @Field(() => MakerWhereUniqueInput, { nullable: true })
  connect?: MakerWhereUniqueInput;
}
