import { SetMetadata } from '@nestjs/common';
import { Authority } from '../../../../src/@generated/prisma-nestjs-graphql/prisma/authority.enum';

export const AUTHORITIES_KEY = 'authorities';
export const Authorities = (...authorities: Authority[]) =>
  SetMetadata(AUTHORITIES_KEY, authorities);
