import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderRequest_deliveryPort } from '../order-request/order-request-delivery-port.enum';

@InputType()
export class EnumOrderRequest_deliveryPortFieldUpdateOperationsInput {
  @Field(() => OrderRequest_deliveryPort, { nullable: true })
  set?: keyof typeof OrderRequest_deliveryPort;
}
