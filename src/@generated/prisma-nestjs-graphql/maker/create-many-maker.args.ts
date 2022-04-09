import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerCreateManyInput } from './maker-create-many.input';

@ArgsType()
export class CreateManyMakerArgs {
  @Field(() => [MakerCreateManyInput], { nullable: false })
  data!: Array<MakerCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
