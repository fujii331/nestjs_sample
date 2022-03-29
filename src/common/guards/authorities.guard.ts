import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Authority } from '@prisma/client';
import { AUTHORITIES_KEY } from '../decorators/metadata/authorities.metadata';

@Injectable()
export class AuthoritiesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Authority[]>(
      AUTHORITIES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }
    const ctx = GqlExecutionContext.create(context);
    const { user } = ctx.getContext().req;

    if (!requiredRoles.some((role) => user.authority === role)) {
      throw new ForbiddenException();
    }

    return true;
  }
}
