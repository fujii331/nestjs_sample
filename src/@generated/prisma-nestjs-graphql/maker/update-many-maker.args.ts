import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerUpdateManyMutationInput } from './maker-update-many-mutation.input';
import { MakerWhereInput } from './maker-where.input';

@ArgsType()
export class UpdateManyMakerArgs {
  @Field(() => MakerUpdateManyMutationInput, { nullable: false })
  data!: MakerUpdateManyMutationInput;

  @Field(() => MakerWhereInput, { nullable: true })
  where?: MakerWhereInput;
}
