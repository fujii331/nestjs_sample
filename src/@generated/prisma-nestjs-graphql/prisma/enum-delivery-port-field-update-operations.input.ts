import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeliveryPort } from './delivery-port.enum';

@InputType()
export class EnumDeliveryPortFieldUpdateOperationsInput {
  @Field(() => DeliveryPort, { nullable: true })
  set?: keyof typeof DeliveryPort;
}
