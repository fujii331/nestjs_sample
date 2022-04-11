import { createFactory } from './create-factory';
import { ProductCreateInput } from '../../src/@generated/prisma-nestjs-graphql/product/product-create.input';
import { Product } from '../../src/@generated/prisma-nestjs-graphql/product/product.model';

const defaultAttributes: ProductCreateInput = {
  prodCd: 'MMK1',
  maker: {
    create: {
      makerCd: '0001',
      makerName: 'テストメーカー',
      leadtime: 120,
      isValid: true,
    },
  },
  prodName: 'テスト商品',
  ssp180Days: 2.2,
  carton3SideSize: 120,
  minOrderQuantity: 30,
  isValid: true,
};

export const productFactory = createFactory<ProductCreateInput, Product>(
  'product',
  defaultAttributes,
);
