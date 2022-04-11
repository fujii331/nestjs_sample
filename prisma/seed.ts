import { ObjectType } from '@nestjs/graphql';
import { DeliveryPort } from '@prisma/client';
import { OrderEntryCreateInput } from '../src/@generated/prisma-nestjs-graphql/order-entry/order-entry-create.input';
import { makerFactory } from '../test/factories/maker.factory';
import { orderEntryFactory } from '../test/factories/order-entry.factory';
import { productFactory } from '../test/factories/product.factory';
import { userFactory } from '../test/factories/users.factory';

// user
const createUsers = async () => {
  @ObjectType()
  class UserSeed {
    email: string;
    name: string;
  }

  const userSeedData: Array<UserSeed> = [
    { name: 'テスト 一郎', email: 'test1@example.com' },
    { name: 'テスト 二郎', email: 'test2@example.com' },
    { name: 'テスト 三郎', email: 'test3@example.com' },
    { name: 'テスト 四郎', email: 'test4@example.com' },
    { name: 'テスト 五郎', email: 'test5@example.com' },
  ];

  for (const userSeed of userSeedData) {
    const user = await userFactory.create({
      name: userSeed.name,
      email: userSeed.email,
    });
    console.log(user);
  }
};

// maker
const createMakers = async () => {
  @ObjectType()
  class MakerSeed {
    makerCd: string;
    makerName: string;
    leadtime: number;
  }

  const makerSeedData: Array<MakerSeed> = [
    { makerCd: '0001', makerName: 'メーカー1', leadtime: 120 },
    { makerCd: '0002', makerName: 'メーカー2', leadtime: 100 },
    { makerCd: '0003', makerName: 'メーカー3', leadtime: 90 },
    { makerCd: '0004', makerName: 'メーカー4', leadtime: 150 },
    { makerCd: '0005', makerName: 'メーカー5', leadtime: 130 },
  ];

  for (const makerSeed of makerSeedData) {
    const maker = await makerFactory.create({
      makerCd: makerSeed.makerCd,
      makerName: makerSeed.makerName,
      leadtime: makerSeed.leadtime,
    });
    console.log(maker);
  }
};

// product
const createProducts = async () => {
  @ObjectType()
  class ProductSeed {
    prodCd: string;
    maker: any;
    prodName: string;
    ssp180Days: number;
    carton3SideSize: number;
    minOrderQuantity: number;
  }

  const productSeedData: Array<ProductSeed> = [
    {
      prodCd: 'MMK0001',
      maker: {
        connect: {
          makerCd: '0001',
        },
      },
      prodName: 'メーカー1商品MMK',
      ssp180Days: 2.3,
      carton3SideSize: 120,
      minOrderQuantity: 20,
    },
    {
      prodCd: 'CDA0001',
      maker: {
        connect: {
          makerCd: '0001',
        },
      },
      prodName: 'メーカー1商品CDA',
      ssp180Days: 2.0,
      carton3SideSize: 95,
      minOrderQuantity: 40,
    },
    {
      prodCd: 'QWK0001',
      maker: {
        connect: {
          makerCd: '0001',
        },
      },
      prodName: 'メーカー1商品QWK',
      ssp180Days: 0.7,
      carton3SideSize: 220,
      minOrderQuantity: 50,
    },
    {
      prodCd: 'MMK0002',
      maker: {
        connect: {
          makerCd: '0002',
        },
      },
      prodName: 'メーカー2商品MMK',
      ssp180Days: 2.3,
      carton3SideSize: 120,
      minOrderQuantity: 20,
    },
    {
      prodCd: 'CDA0002',
      maker: {
        connect: {
          makerCd: '0002',
        },
      },
      prodName: 'メーカー2商品CDA',
      ssp180Days: 2.0,
      carton3SideSize: 95,
      minOrderQuantity: 40,
    },
    {
      prodCd: 'QWK0002',
      maker: {
        connect: {
          makerCd: '0002',
        },
      },
      prodName: 'メーカー2商品QWK',
      ssp180Days: 0.7,
      carton3SideSize: 220,
      minOrderQuantity: 50,
    },
    {
      prodCd: 'MMK0003',
      maker: {
        connect: {
          makerCd: '0003',
        },
      },
      prodName: 'メーカー3商品MMK',
      ssp180Days: 2.3,
      carton3SideSize: 120,
      minOrderQuantity: 20,
    },
    {
      prodCd: 'CDA0003',
      maker: {
        connect: {
          makerCd: '0003',
        },
      },
      prodName: 'メーカー3商品CDA',
      ssp180Days: 2.0,
      carton3SideSize: 95,
      minOrderQuantity: 40,
    },
    {
      prodCd: 'QWK0003',
      maker: {
        connect: {
          makerCd: '0003',
        },
      },
      prodName: 'メーカー3商品QWK',
      ssp180Days: 0.7,
      carton3SideSize: 220,
      minOrderQuantity: 50,
    },
    {
      prodCd: 'MMK0004',
      maker: {
        connect: {
          makerCd: '0004',
        },
      },
      prodName: 'メーカー4商品MMK',
      ssp180Days: 2.3,
      carton3SideSize: 120,
      minOrderQuantity: 20,
    },
    {
      prodCd: 'CDA0004',
      maker: {
        connect: {
          makerCd: '0004',
        },
      },
      prodName: 'メーカー4商品CDA',
      ssp180Days: 2.0,
      carton3SideSize: 95,
      minOrderQuantity: 40,
    },
    {
      prodCd: 'QWK0004',
      maker: {
        connect: {
          makerCd: '0004',
        },
      },
      prodName: 'メーカー4商品QWK',
      ssp180Days: 0.7,
      carton3SideSize: 220,
      minOrderQuantity: 50,
    },
    {
      prodCd: 'MMK0005',
      maker: {
        connect: {
          makerCd: '0005',
        },
      },
      prodName: 'メーカー5商品MMK',
      ssp180Days: 2.3,
      carton3SideSize: 120,
      minOrderQuantity: 20,
    },
    {
      prodCd: 'CDA0005',
      maker: {
        connect: {
          makerCd: '0005',
        },
      },
      prodName: 'メーカー5商品CDA',
      ssp180Days: 2.0,
      carton3SideSize: 95,
      minOrderQuantity: 40,
    },
    {
      prodCd: 'QWK0005',
      maker: {
        connect: {
          makerCd: '0005',
        },
      },
      prodName: 'メーカー5商品QWK',
      ssp180Days: 0.7,
      carton3SideSize: 220,
      minOrderQuantity: 50,
    },
  ];

  for (const productSeed of productSeedData) {
    const product = await productFactory.create({
      prodCd: productSeed.prodCd,
      maker: productSeed.maker,
      prodName: productSeed.prodName,
      ssp180Days: productSeed.ssp180Days,
      carton3SideSize: productSeed.carton3SideSize,
      minOrderQuantity: productSeed.minOrderQuantity,
    });
    console.log(product);
  }
};

const createOrderEntries = async () => {
  const orderEntrySeedData: Array<OrderEntryCreateInput> = [
    {
      maker: {
        connect: {
          makerCd: '0001',
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
                      prodCd: 'MMK0001',
                    },
                  },
                  orderQuantity: 20,
                  ssp: 2.2,
                  cbm: 1.3,
                  wasOrderAlerted: true,
                },
                {
                  product: {
                    connect: {
                      prodCd: 'CDA0001',
                    },
                  },
                  orderQuantity: 40,
                  ssp: 2.8,
                  cbm: 1.5,
                  wasOrderAlerted: true,
                },
              ],
            },
          },
          {
            containerNo: 2,
            orderRequestNo: 'ORDER2',
            deliveryDate: new Date('2022-01-01'),
            deliveryPort: DeliveryPort.INZAI,
            orderRequestDetail: {
              create: [
                {
                  product: {
                    connect: {
                      prodCd: 'MMK0001',
                    },
                  },
                  orderQuantity: 20,
                  ssp: 2.2,
                  cbm: 1.3,
                  wasOrderAlerted: true,
                },
                {
                  product: {
                    connect: {
                      prodCd: 'CDA0001',
                    },
                  },
                  orderQuantity: 40,
                  ssp: 2.8,
                  cbm: 1.5,
                  wasOrderAlerted: true,
                },
              ],
            },
          },
        ],
      },
    },
    {
      maker: {
        connect: {
          makerCd: '0002',
        },
      },
      orderRequest: {
        create: [
          {
            containerNo: 1,
            orderRequestNo: 'ORDER3',
            deliveryDate: new Date('2022-01-01'),
            deliveryPort: DeliveryPort.INZAI,
            orderRequestDetail: {
              create: [
                {
                  product: {
                    connect: {
                      prodCd: 'MMK0002',
                    },
                  },
                  orderQuantity: 220,
                  ssp: 2.2,
                  cbm: 1.3,
                  wasOrderAlerted: true,
                },
                {
                  product: {
                    connect: {
                      prodCd: 'CDA0002',
                    },
                  },
                  orderQuantity: 110,
                  ssp: 2.8,
                  cbm: 1.5,
                  wasOrderAlerted: true,
                },
              ],
            },
          },
        ],
      },
    },
  ];

  // orderEntry
  for (const orderEntrySeed of orderEntrySeedData) {
    const orderEntry = await orderEntryFactory.create({
      maker: orderEntrySeed.maker,
      orderRequest: orderEntrySeed.orderRequest,
    });
    console.log(orderEntry);
  }
};

const main = async () => {
  console.log(`Start seeding ...`);

  await createUsers();
  await createMakers();
  await createProducts();
  await createOrderEntries();

  console.log(`Seeding finished.`);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
