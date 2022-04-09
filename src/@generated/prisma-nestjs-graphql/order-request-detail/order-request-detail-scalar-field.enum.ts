import { registerEnumType } from '@nestjs/graphql';

export enum OrderRequestDetailScalarFieldEnum {
  id = 'id',
  prodCd = 'prodCd',
  orderQuantity = 'orderQuantity',
  ssp = 'ssp',
  cbm = 'cbm',
  wasOrderAlerted = 'wasOrderAlerted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  OrderRequestId = 'OrderRequestId',
}

registerEnumType(OrderRequestDetailScalarFieldEnum, {
  name: 'OrderRequestDetailScalarFieldEnum',
  description: undefined,
});
