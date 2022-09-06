import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerUpdateInput } from './maker-update.input';
import { Type } from 'class-transformer';
import { MakerWhereUniqueInput } from './maker-where-unique.input';

@ArgsType()
export class UpdateOneMakerArgs {

    @Field(() => MakerUpdateInput, {nullable:false})
    @Type(() => MakerUpdateInput)
    data!: MakerUpdateInput;

    @Field(() => MakerWhereUniqueInput, {nullable:false})
    @Type(() => MakerWhereUniqueInput)
    where!: MakerWhereUniqueInput;
}
