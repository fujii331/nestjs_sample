import { registerEnumType } from '@nestjs/graphql';

export enum OrderArrivalDataScalarFieldEnum {
    id = "id",
    prodCd = "prodCd",
    orderQuantity = "orderQuantity",
    deliveryDate = "deliveryDate",
    deliveryPort = "deliveryPort",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderArrivalDataScalarFieldEnum, { name: 'OrderArrivalDataScalarFieldEnum', description: undefined })
