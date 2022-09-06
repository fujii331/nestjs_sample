import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderRequestDetailScalarWhereWithAggregatesInput {

    @Field(() => [OrderRequestDetailScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderRequestDetailScalarWhereWithAggregatesInput>;

    @Field(() => [OrderRequestDetailScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderRequestDetailScalarWhereWithAggregatesInput>;

    @Field(() => [OrderRequestDetailScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderRequestDetailScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    prodCd?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    orderQuantity?: IntWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    ssp?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    cbm?: FloatNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    wasOrderAlerted?: BoolWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    orderRequestId?: IntWithAggregatesFilter;
}
