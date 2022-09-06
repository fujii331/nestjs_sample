import { registerEnumType } from '@nestjs/graphql';

export enum DeliveryPort {
    INZAI = "INZAI",
    TOYOKAWA = "TOYOKAWA",
    KOBE = "KOBE",
    MOJI = "MOJI",
    OTHER = "OTHER"
}


registerEnumType(DeliveryPort, { name: 'DeliveryPort', description: undefined })
