import { createFactory } from './create-factory';
import { OrderRequestDetailCreateInput } from '../../src/@generated/prisma-nestjs-graphql/order-request-detail/order-request-detail-create.input';
import { OrderRequestDetail } from '../../src/@generated/prisma-nestjs-graphql/order-request-detail/order-request-detail.model';
import { DeliveryPort, PoStatus } from '@prisma/client';

const defaultAttributes: OrderRequestDetailCreateInput = {
  product: {
    create: {
      prodCd: 'MMK1',
      prodName: 'テスト商品',
      ssp180Days: 2.2,
      carton3SideSize: 120,
      minOrderQuantity: 30,
      isValid: true,
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
  orderRequest: {
    create: {
      containerNo: 1,
      orderRequestNo: 'ORDER0001',
      deliveryDate: new Date('2022-01-01'),
      poRequestDate: null,
      deliveryPort: DeliveryPort.INZAI,
      poStatus: PoStatus.NOTISSUED,
      discarded: false,
      orderEntry: {
        create: {
          maker: {
            connect: {
              makerCd: '0001',
            },
          },
        },
      },
    },
  },
  orderQuantity: 30,
  ssp: 1.5,
  cbm: 0.5,
  wasOrderAlerted: false,
};

export const orderRequestDetailFactory = createFactory<
  OrderRequestDetailCreateInput,
  OrderRequestDetail
>('orderRequestDetail', defaultAttributes);
