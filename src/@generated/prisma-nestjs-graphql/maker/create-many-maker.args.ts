import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerCreateManyInput } from './maker-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyMakerArgs {

    @Field(() => [MakerCreateManyInput], {nullable:false})
    @Type(() => MakerCreateManyInput)
    @ValidateNested()
    @Type(() => MakerCreateManyInput)
    data!: Array<MakerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
