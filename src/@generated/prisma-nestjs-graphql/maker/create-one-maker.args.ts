import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerCreateInput } from './maker-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMakerArgs {
  @Field(() => MakerCreateInput, { nullable: false })
  @ValidateNested()
  @Type(() => MakerCreateInput)
  data!: MakerCreateInput;
}
