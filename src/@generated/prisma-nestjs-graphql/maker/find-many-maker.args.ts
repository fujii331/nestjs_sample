import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakerWhereInput } from './maker-where.input';
import { Type } from 'class-transformer';
import { MakerOrderByWithRelationInput } from './maker-order-by-with-relation.input';
import { MakerWhereUniqueInput } from './maker-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MakerScalarFieldEnum } from './maker-scalar-field.enum';

@ArgsType()
export class FindManyMakerArgs {

    @Field(() => MakerWhereInput, {nullable:true})
    @Type(() => MakerWhereInput)
    where?: MakerWhereInput;

    @Field(() => [MakerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MakerOrderByWithRelationInput>;

    @Field(() => MakerWhereUniqueInput, {nullable:true})
    cursor?: MakerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MakerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MakerScalarFieldEnum>;
}
