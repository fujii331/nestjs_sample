import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerUpdateManyMutationInput } from './maker-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MakerWhereInput } from './maker-where.input';

@ArgsType()
export class UpdateManyMakerArgs {

    @Field(() => MakerUpdateManyMutationInput, {nullable:false})
    @Type(() => MakerUpdateManyMutationInput)
    data!: MakerUpdateManyMutationInput;

    @Field(() => MakerWhereInput, {nullable:true})
    @Type(() => MakerWhereInput)
    where?: MakerWhereInput;
}
