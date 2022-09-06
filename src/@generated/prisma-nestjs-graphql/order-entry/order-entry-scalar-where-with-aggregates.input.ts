import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderEntryScalarWhereWithAggregatesInput {

    @Field(() => [OrderEntryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderEntryScalarWhereWithAggregatesInput>;

    @Field(() => [OrderEntryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderEntryScalarWhereWithAggregatesInput>;

    @Field(() => [OrderEntryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderEntryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    makerCd?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;
}
