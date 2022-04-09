import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MakerWhereInput } from './maker-where.input';

@InputType()
export class MakerRelationFilter {
  @Field(() => MakerWhereInput, { nullable: true })
  is?: MakerWhereInput;

  @Field(() => MakerWhereInput, { nullable: true })
  isNot?: MakerWhereInput;
}
