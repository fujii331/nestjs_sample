import { registerEnumType } from '@nestjs/graphql';

export enum OrderEntryScalarFieldEnum {
  id = 'id',
  makerCd = 'makerCd',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(OrderEntryScalarFieldEnum, {
  name: 'OrderEntryScalarFieldEnum',
  description: undefined,
});
