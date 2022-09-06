import { registerEnumType } from '@nestjs/graphql';

export enum OrderRequest_deliveryPort {
    INZAI = "INZAI",
    TOYOKAWA = "TOYOKAWA",
    KOBE = "KOBE",
    MOJI = "MOJI",
    OTHER = "OTHER"
}


registerEnumType(OrderRequest_deliveryPort, { name: 'OrderRequest_deliveryPort', description: undefined })
