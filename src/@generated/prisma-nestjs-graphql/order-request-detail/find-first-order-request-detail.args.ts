import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestDetailWhereInput } from './order-request-detail-where.input';
import { OrderRequestDetailOrderByWithRelationInput } from './order-request-detail-order-by-with-relation.input';
import { OrderRequestDetailWhereUniqueInput } from './order-request-detail-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderRequestDetailScalarFieldEnum } from './order-request-detail-scalar-field.enum';

@ArgsType()
export class FindFirstOrderRequestDetailArgs {
  @Field(() => OrderRequestDetailWhereInput, { nullable: true })
  where?: OrderRequestDetailWhereInput;

  @Field(() => [OrderRequestDetailOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OrderRequestDetailOrderByWithRelationInput>;

  @Field(() => OrderRequestDetailWhereUniqueInput, { nullable: true })
  cursor?: OrderRequestDetailWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [OrderRequestDetailScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof OrderRequestDetailScalarFieldEnum>;
}
