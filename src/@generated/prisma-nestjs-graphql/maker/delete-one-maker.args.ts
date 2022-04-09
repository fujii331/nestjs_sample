import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerWhereUniqueInput } from './maker-where-unique.input';

@ArgsType()
export class DeleteOneMakerArgs {
  @Field(() => MakerWhereUniqueInput, { nullable: false })
  where!: MakerWhereUniqueInput;
}
