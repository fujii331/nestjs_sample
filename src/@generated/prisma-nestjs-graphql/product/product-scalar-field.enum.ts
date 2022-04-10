import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
  prodCd = 'prodCd',
  makerCd = 'makerCd',
  prodName = 'prodName',
  ssp180Days = 'ssp180Days',
  carton3SideSize = 'carton3SideSize',
  minOrderQuantity = 'minOrderQuantity',
  isValid = 'isValid',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(ProductScalarFieldEnum, {
  name: 'ProductScalarFieldEnum',
  description: undefined,
});
