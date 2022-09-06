import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMakerArgs {

    @Field(() => MakerWhereUniqueInput, {nullable:false})
    @Type(() => MakerWhereUniqueInput)
    where!: MakerWhereUniqueInput;
}
