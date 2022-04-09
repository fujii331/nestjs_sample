import { registerEnumType } from '@nestjs/graphql';

export enum OrderRequestScalarFieldEnum {
  id = 'id',
  containerNo = 'containerNo',
  orderRequestNo = 'orderRequestNo',
  deliveryDate = 'deliveryDate',
  poRequestDate = 'poRequestDate',
  deliveryPort = 'deliveryPort',
  poStatus = 'poStatus',
  discarded = 'discarded',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  OrderEntryId = 'OrderEntryId',
}

registerEnumType(OrderRequestScalarFieldEnum, {
  name: 'OrderRequestScalarFieldEnum',
  description: undefined,
});
