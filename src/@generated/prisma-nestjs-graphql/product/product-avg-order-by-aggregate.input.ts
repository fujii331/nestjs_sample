import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProductAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    ssp180Days?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    carton3SideSize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minOrderQuantity?: keyof typeof SortOrder;
}
