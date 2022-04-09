import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerUpdateInput } from './maker-update.input';
import { MakerWhereUniqueInput } from './maker-where-unique.input';

@ArgsType()
export class UpdateOneMakerArgs {
  @Field(() => MakerUpdateInput, { nullable: false })
  data!: MakerUpdateInput;

  @Field(() => MakerWhereUniqueInput, { nullable: false })
  where!: MakerWhereUniqueInput;
}
