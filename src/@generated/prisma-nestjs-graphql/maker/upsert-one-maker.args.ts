import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { MakerCreateInput } from './maker-create.input';
import { MakerUpdateInput } from './maker-update.input';

@ArgsType()
export class UpsertOneMakerArgs {
  @Field(() => MakerWhereUniqueInput, { nullable: false })
  where!: MakerWhereUniqueInput;

  @Field(() => MakerCreateInput, { nullable: false })
  create!: MakerCreateInput;

  @Field(() => MakerUpdateInput, { nullable: false })
  update!: MakerUpdateInput;
}
