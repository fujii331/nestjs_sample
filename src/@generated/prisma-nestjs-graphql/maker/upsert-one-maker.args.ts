import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { Type } from 'class-transformer';
import { MakerCreateInput } from './maker-create.input';
import { MakerUpdateInput } from './maker-update.input';

@ArgsType()
export class UpsertOneMakerArgs {

    @Field(() => MakerWhereUniqueInput, {nullable:false})
    @Type(() => MakerWhereUniqueInput)
    where!: MakerWhereUniqueInput;

    @Field(() => MakerCreateInput, {nullable:false})
    @Type(() => MakerCreateInput)
    create!: MakerCreateInput;

    @Field(() => MakerUpdateInput, {nullable:false})
    @Type(() => MakerUpdateInput)
    update!: MakerUpdateInput;
}
