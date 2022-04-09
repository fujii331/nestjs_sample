import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequest_deliveryPort } from '../order-request/order-request-delivery-port.enum';
import { NestedEnumOrderRequest_deliveryPortFilter } from './nested-enum-order-request-delivery-port-filter.input';

@InputType()
export class EnumOrderRequest_deliveryPortFilter {
  @Field(() => OrderRequest_deliveryPort, { nullable: true })
  equals?: keyof typeof OrderRequest_deliveryPort;

  @Field(() => [OrderRequest_deliveryPort], { nullable: true })
  in?: Array<keyof typeof OrderRequest_deliveryPort>;

  @Field(() => [OrderRequest_deliveryPort], { nullable: true })
  notIn?: Array<keyof typeof OrderRequest_deliveryPort>;

  @Field(() => NestedEnumOrderRequest_deliveryPortFilter, { nullable: true })
  not?: NestedEnumOrderRequest_deliveryPortFilter;
}
