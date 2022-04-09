import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerWhereInput } from './maker-where.input';

@ArgsType()
export class DeleteManyMakerArgs {
  @Field(() => MakerWhereInput, { nullable: true })
  where?: MakerWhereInput;
}
