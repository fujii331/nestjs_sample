import { registerEnumType } from '@nestjs/graphql';

export enum OrderRequestDetailScalarFieldEnum {
    id = "id",
    prodCd = "prodCd",
    orderQuantity = "orderQuantity",
    ssp = "ssp",
    cbm = "cbm",
    wasOrderAlerted = "wasOrderAlerted",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    orderRequestId = "orderRequestId"
}


registerEnumType(OrderRequestDetailScalarFieldEnum, { name: 'OrderRequestDetailScalarFieldEnum', description: undefined })
