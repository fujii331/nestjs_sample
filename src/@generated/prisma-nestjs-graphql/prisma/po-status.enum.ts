import { registerEnumType } from '@nestjs/graphql';

export enum PoStatus {
  NOTISSUED = 'NOTISSUED',
  ISSUED = 'ISSUED',
}

registerEnumType(PoStatus, { name: 'PoStatus', description: undefined });
