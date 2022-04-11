import { createFactory } from './create-factory';
import { DeliveryPort } from '../../src/@generated/prisma-nestjs-graphql/prisma/delivery-port.enum';
import { OrderEntryCreateInput } from '../../src/@generated/prisma-nestjs-graphql/order-entry/order-entry-create.input';
import { OrderEntry } from '../../src/@generated/prisma-nestjs-graphql/order-entry/order-entry.model';

const defaultAttributes: OrderEntryCreateInput = {
  maker: {
    create: {
      makerCd: '0001',
      makerName: 'テストメーカー',
      leadtime: 120,
      isValid: true,
    },
  },
  orderRequest: {
    create: [
      {
        containerNo: 1,
        orderRequestNo: 'ORDER1',
        deliveryDate: new Date('2022-01-01'),
        deliveryPort: DeliveryPort.INZAI,
        orderRequestDetail: {
          create: [
            {
              product: {
                connect: {
                  prodCd: 'MMK1',
                },
              },
              orderQuantity: 20,
              ssp: 2.2,
              cbm: 1.3,
              wasOrderAlerted: true,
            },
          ],
        },
      },
    ],
  },
};

export const orderEntryFactory = createFactory<
  OrderEntryCreateInput,
  OrderEntry
>('orderEntry', defaultAttributes);
