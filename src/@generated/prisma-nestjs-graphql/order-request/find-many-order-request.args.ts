import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderRequestWhereInput } from './order-request-where.input';
import { OrderRequestOrderByWithRelationInput } from './order-request-order-by-with-relation.input';
import { OrderRequestWhereUniqueInput } from './order-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderRequestScalarFieldEnum } from './order-request-scalar-field.enum';

@ArgsType()
export class FindManyOrderRequestArgs {
  @Field(() => OrderRequestWhereInput, { nullable: true })
  where?: OrderRequestWhereInput;

  @Field(() => [OrderRequestOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OrderRequestOrderByWithRelationInput>;

  @Field(() => OrderRequestWhereUniqueInput, { nullable: true })
  cursor?: OrderRequestWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [OrderRequestScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof OrderRequestScalarFieldEnum>;
}
