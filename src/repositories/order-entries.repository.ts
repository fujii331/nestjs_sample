import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { OrderEntriesInput } from '../../src/interfaces/order-entries/order-entries.input';
import { CreateOneOrderEntryArgs } from '../../src/@generated/prisma-nestjs-graphql/order-entry/create-one-order-entry.args';
// import { Prisma } from '@prisma/client';
import { UpdateOneOrderEntryArgs } from '../../src/@generated/prisma-nestjs-graphql/order-entry/update-one-order-entry.args';
import { FirstOrderEntryInput } from '../../src/interfaces/order-entries/first-order-entry.input';
import { OrderEntry } from '../../src/@generated/prisma-nestjs-graphql/order-entry/order-entry.model';
// import { stringify } from 'csv-stringify';
import { Authority } from '../@generated/prisma-nestjs-graphql/prisma/authority.enum';

@Injectable()
export class OrderEntriesRepository {
  constructor(private readonly prisma: PrismaService) {}
  // constructor(private prisma: PrismaService) {
  //   prisma.$on<any>('query', (event: Prisma.QueryEvent) => {
  //     console.log('Query: ' + event.query);
  //     console.log('Duration: ' + event.duration + 'ms');
  //   });
  // }

  async findOrderEntries(
    params: OrderEntriesInput,
  ): Promise<OrderEntry[] | null> {
    const { skip, take, orderEntriesWhereInput, cursor } = params;
    // 直接SQL実行
    // const result = await this.prisma.$queryRawUnsafe<OrderEntry[]>(
    //   'SELECT * FROM OrderEntry WHERE (makerCd = ?)',
    //   '0001',
    // );
    // console.log(result);

    const bigList = [...Array(5000)].map((_, i) => {
      return {
        email: 'test@example.com',
        name: '深太郎',
        password: 'fwefwefwefwefw',
        authority: Authority.FIRST,
        hashedRefreshToken: 'fwefawefaw',
      };
    });

    const arraySplit = <T = object>(array: T[], n: number): T[][] =>
      array.reduce(
        (acc: T[][], c, i: number) =>
          i % n ? acc : [...acc, ...[array.slice(i, i + n)]],
        [],
      );

    const result = arraySplit(bigList, 5000);

    // console.log(result);

    setInterval(() => {
      const used = process.memoryUsage();
      const messages = [];
      for (const key in used) {
        messages.push(
          `${key}: ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`,
        );
      }
      console.log(new Date(), messages.join(', '));
    }, 10 * 1000);

    for (const test of result) {
      const query = test.map((item) =>
        this.prisma.user.upsert({
          where: {
            id: 1,
          },
          update: item,
          create: item,
        }),
      );

      await this.prisma.$transaction([...query]).catch((error) => {
        console.log('厳しいね');
      });
    }

    // const query = bigList.map((item) =>
    //   this.prisma.orderEntry.upsert({
    //     where: {
    //       id: 1,
    //     },
    //     update: item,
    //     create: item,
    //   }),
    // );

    // await this.prisma.$transaction([...query]).catch((error) => {
    //   console.log('厳しいね');
    // });

    console.log('終わりです');

    return this.prisma.orderEntry.findMany({
      skip,
      take,
      cursor,
      select: {
        id: true,
        makerCd: true,
        createdAt: true,
        updatedAt: true,
        // orderRequest: {
        //   // where: { discarded: false, containerNo: { in: [2, 3] } },
        //   include: {
        //     // orderRequestDetail: true,
        //     _count: {
        //       select: { orderRequestDetail: true },
        //     },
        //   },
        // },
        // maker: {
        //   include: {
        //     product: {
        //       include: { orderArrivalData: true, orderRequestDetail: true },
        //     },
        //   },
        // },
      },
      // include: {
      //   orderRequest: {
      //     where: { discarded: false, containerNo: { in: [2, 3] } },
      //     include: {
      //       // orderRequestDetail: true,
      //       _count: {
      //         select: { orderRequestDetail: true },
      //       },
      //     },
      //   },
      //   maker: {
      //     include: {
      //       product: {
      //         include: { orderArrivalData: true, orderRequestDetail: true },
      //       },
      //     },
      //   },
      // },
      where: {
        // makerCd: orderEntriesWhereInput.makerCd,
        OR: [
          {
            id: 2,
          },
          {
            makerCd: orderEntriesWhereInput.makerCd,
            orderRequest: {
              some: {
                orderRequestNo: orderEntriesWhereInput.orderRequestNo,
              },
            },
          },
        ],
        // orderRequest: {
        //   some: {
        //     // orderRequestNo: orderEntriesWhereInput.orderRequestNo,
        //     // orderRequestNo: { in: [] },
        //     orderRequestDetail: {
        //       // everyは全ての明細が指定の商品コードのものを取ってくる
        //       // someはどれかの明細に指定の商品コードが入っていたら取ってくる。この際、明細は商品コードが指定のものじゃなくても全部取ってくる
        //       some: {
        //         prodCd: orderEntriesWhereInput.prodCd,
        //       },
        //     },
        //   },
        // },
      },
      orderBy: {
        makerCd: 'asc',
      },
    });
  }

  async findFirstOrderEntry(
    params: FirstOrderEntryInput,
  ): Promise<OrderEntry | null> {
    const { makerCd, orderRequestNo, prodCd } = params;
    return this.prisma.orderEntry.findFirst({
      include: {
        orderRequest: {
          include: {
            orderRequestDetail: {
              where: { prodCd: prodCd },
            },
          },
          where: {
            discarded: false,
          },
        },
        maker: {
          include: {
            product: {
              include: { orderArrivalData: true, orderRequestDetail: true },
            },
          },
        },
      },
      where: {
        // makerCd: makerCd,
        orderRequest: {
          some: {
            // OR: [
            //   {
            //     orderRequestNo: orderRequestNo,
            //   },
            //   {
            //     orderRequestNo: 'test',
            //   },
            // ],
            // orderRequestNo: { in: ['ORDER2'] },
            // discarded: false,
            // orderRequestNo: orderRequestNo,
            // orderRequestDetail: {
            //   // everyは全ての明細が指定の商品コードのものを取ってくる
            //   // someはどれかの明細に指定の商品コードが入っていたら取ってくる。この際、明細は商品コードが指定のものじゃなくても全部取ってくる
            //   some: {
            //     prodCd: prodCd,
            //   },
            // },
          },
        },
      },
      orderBy: {
        makerCd: 'asc',
      },
    });
  }

  async createOrderEntry(args: CreateOneOrderEntryArgs): Promise<OrderEntry> {
    return this.prisma.orderEntry.create(args);
  }

  async updateOrderEntry(args: UpdateOneOrderEntryArgs): Promise<OrderEntry> {
    return this.prisma.orderEntry.update(args);
  }
}
