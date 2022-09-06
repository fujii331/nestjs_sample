import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestDetailWhereInput } from './order-request-detail-where.input';

@InputType()
export class OrderRequestDetailListRelationFilter {

    @Field(() => OrderRequestDetailWhereInput, {nullable:true})
    every?: OrderRequestDetailWhereInput;

    @Field(() => OrderRequestDetailWhereInput, {nullable:true})
    some?: OrderRequestDetailWhereInput;

    @Field(() => OrderRequestDetailWhereInput, {nullable:true})
    none?: OrderRequestDetailWhereInput;
}
