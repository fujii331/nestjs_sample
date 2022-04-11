import { Prisma } from '@prisma/client';
import { PrismaService } from '../src/prisma.service';

/**
 * 全てのテーブルのデータを削除する
 * 参考: https://github.com/prisma/docs/issues/451
 */
export const cleanupDatabase = async (): Promise<void> => {
  const prisma = new PrismaService();
  const modelNames = Prisma.dmmf.datamodel.models.map((model) => model.name);

  await Promise.all(
    modelNames.map((modelName) => {
      const convertedModelName =
        modelName.charAt(0).toLowerCase() + modelName.slice(1);
      prisma[convertedModelName].deleteMany();
    }),
  );

  prisma.$disconnect();
};
