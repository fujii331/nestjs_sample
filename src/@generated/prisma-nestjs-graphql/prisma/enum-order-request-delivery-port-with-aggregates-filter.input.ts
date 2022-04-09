import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequest_deliveryPort } from '../order-request/order-request-delivery-port.enum';
import { NestedEnumOrderRequest_deliveryPortWithAggregatesFilter } from './nested-enum-order-request-delivery-port-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumOrderRequest_deliveryPortFilter } from './nested-enum-order-request-delivery-port-filter.input';

@InputType()
export class EnumOrderRequest_deliveryPortWithAggregatesFilter {
  @Field(() => OrderRequest_deliveryPort, { nullable: true })
  equals?: keyof typeof OrderRequest_deliveryPort;

  @Field(() => [OrderRequest_deliveryPort], { nullable: true })
  in?: Array<keyof typeof OrderRequest_deliveryPort>;

  @Field(() => [OrderRequest_deliveryPort], { nullable: true })
  notIn?: Array<keyof typeof OrderRequest_deliveryPort>;

  @Field(() => NestedEnumOrderRequest_deliveryPortWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumOrderRequest_deliveryPortWithAggregatesFilter;

  @Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter;

  @Field(() => NestedEnumOrderRequest_deliveryPortFilter, { nullable: true })
  _min?: NestedEnumOrderRequest_deliveryPortFilter;

  @Field(() => NestedEnumOrderRequest_deliveryPortFilter, { nullable: true })
  _max?: NestedEnumOrderRequest_deliveryPortFilter;
}
