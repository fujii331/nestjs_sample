import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderEntryScalarWhereInput {
  @Field(() => [OrderEntryScalarWhereInput], { nullable: true })
  AND?: Array<OrderEntryScalarWhereInput>;

  @Field(() => [OrderEntryScalarWhereInput], { nullable: true })
  OR?: Array<OrderEntryScalarWhereInput>;

  @Field(() => [OrderEntryScalarWhereInput], { nullable: true })
  NOT?: Array<OrderEntryScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  makerCd?: StringFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  updatedAt?: DateTimeFilter;
}
