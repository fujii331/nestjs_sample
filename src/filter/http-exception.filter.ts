import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
// import { IncomingWebhook } from '@slack/webhook';
import { newrelic } from '../main';

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    // const webhook = new IncomingWebhook('test');

    // (async () => {
    //   await webhook
    //     .send({
    //       text: "I've got news for you...",
    //     })
    //     .catch((error) => console.log('errorokita'));
    // })();
    newrelic.noticeError(exception.getResponse()['error'], gqlHost.getArgs());

    return exception;
  }
}
