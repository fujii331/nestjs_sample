import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderArrivalDataWhereInput } from './order-arrival-data-where.input';
import { Type } from 'class-transformer';
import { OrderArrivalDataOrderByWithRelationInput } from './order-arrival-data-order-by-with-relation.input';
import { OrderArrivalDataWhereUniqueInput } from './order-arrival-data-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderArrivalDataScalarFieldEnum } from './order-arrival-data-scalar-field.enum';

@ArgsType()
export class FindFirstOrderArrivalDataArgs {

    @Field(() => OrderArrivalDataWhereInput, {nullable:true})
    @Type(() => OrderArrivalDataWhereInput)
    where?: OrderArrivalDataWhereInput;

    @Field(() => [OrderArrivalDataOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderArrivalDataOrderByWithRelationInput>;

    @Field(() => OrderArrivalDataWhereUniqueInput, {nullable:true})
    cursor?: OrderArrivalDataWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderArrivalDataScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderArrivalDataScalarFieldEnum>;
}
