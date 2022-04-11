import { createFactory } from './create-factory';
import { OrderRequestCreateInput } from '../../src/@generated/prisma-nestjs-graphql/order-request/order-request-create.input';
import { OrderRequest, PoStatus } from '@prisma/client';
import { DeliveryPort } from '../../src/@generated/prisma-nestjs-graphql/prisma/delivery-port.enum';

const defaultAttributes: OrderRequestCreateInput = {
  orderEntry: {
    create: {
      maker: {
        create: {
          makerCd: '0001',
          makerName: 'テストメーカー',
          leadtime: 120,
          isValid: true,
        },
      },
    },
  },
  containerNo: 1,
  orderRequestNo: 'ORDER0001',
  deliveryDate: new Date('2022-01-01'),
  poRequestDate: null,
  deliveryPort: DeliveryPort.INZAI,
  poStatus: PoStatus.NOTISSUED,
  discarded: false,
};

export const orderRequestFactory = createFactory<
  OrderRequestCreateInput,
  OrderRequest
>('orderRequest', defaultAttributes);
