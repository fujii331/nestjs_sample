import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MakerScalarWhereWithAggregatesInput {
  @Field(() => [MakerScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<MakerScalarWhereWithAggregatesInput>;

  @Field(() => [MakerScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<MakerScalarWhereWithAggregatesInput>;

  @Field(() => [MakerScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<MakerScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  makerCd?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  makerName?: StringWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  leadtime?: IntWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isValid?: BoolWithAggregatesFilter;

  @HideField()
  createdAt?: DateTimeWithAggregatesFilter;

  @HideField()
  updatedAt?: DateTimeWithAggregatesFilter;
}
