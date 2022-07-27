import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext): any {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    const idToken = ctx.getArgs();
    console.log('こっちきたんですが');
    console.log(idToken);
    const transformedValue = { email: 'test1@example.com', secret: 'tete' };

    request.body = transformedValue;
    return request;
  }
}
