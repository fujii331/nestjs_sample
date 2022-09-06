import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderEntryWhereInput } from './order-entry-where.input';
import { Type } from 'class-transformer';
import { OrderEntryOrderByWithRelationInput } from './order-entry-order-by-with-relation.input';
import { OrderEntryWhereUniqueInput } from './order-entry-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderEntryScalarFieldEnum } from './order-entry-scalar-field.enum';

@ArgsType()
export class FindManyOrderEntryArgs {

    @Field(() => OrderEntryWhereInput, {nullable:true})
    @Type(() => OrderEntryWhereInput)
    where?: OrderEntryWhereInput;

    @Field(() => [OrderEntryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderEntryOrderByWithRelationInput>;

    @Field(() => OrderEntryWhereUniqueInput, {nullable:true})
    cursor?: OrderEntryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderEntryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderEntryScalarFieldEnum>;
}
