import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerCreateInput } from './maker-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneMakerArgs {

    @Field(() => MakerCreateInput, {nullable:false})
    @Type(() => MakerCreateInput)
    @ValidateNested()
    @Type(() => MakerCreateInput)
    data!: MakerCreateInput;
}
