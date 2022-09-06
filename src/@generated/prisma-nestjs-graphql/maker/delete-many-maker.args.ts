import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerWhereInput } from './maker-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMakerArgs {

    @Field(() => MakerWhereInput, {nullable:true})
    @Type(() => MakerWhereInput)
    where?: MakerWhereInput;
}
