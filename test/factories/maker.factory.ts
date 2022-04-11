import { createFactory } from './create-factory';
import { MakerCreateInput } from '../../src/@generated/prisma-nestjs-graphql/maker/maker-create.input';
import { Maker } from '../../src/@generated/prisma-nestjs-graphql/maker/maker.model';

const defaultAttributes: MakerCreateInput = {
  makerCd: '0001',
  makerName: 'テストメーカー',
  leadtime: 120,
  isValid: true,
};

export const makerFactory = createFactory<MakerCreateInput, Maker>(
  'maker',
  defaultAttributes,
);
