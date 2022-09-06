import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequestWhereInput } from './order-request-where.input';

@InputType()
export class OrderRequestRelationFilter {

    @Field(() => OrderRequestWhereInput, {nullable:true})
    is?: OrderRequestWhereInput;

    @Field(() => OrderRequestWhereInput, {nullable:true})
    isNot?: OrderRequestWhereInput;
}
