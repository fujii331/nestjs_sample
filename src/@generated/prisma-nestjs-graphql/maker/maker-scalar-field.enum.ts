import { registerEnumType } from '@nestjs/graphql';

export enum MakerScalarFieldEnum {
    makerCd = "makerCd",
    makerName = "makerName",
    leadtime = "leadtime",
    isValid = "isValid",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MakerScalarFieldEnum, { name: 'MakerScalarFieldEnum', description: undefined })
