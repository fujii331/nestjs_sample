// import { PipeTransform, Injectable } from '@nestjs/common';
// import { DecodedItemInput } from '../dto/decoded-items.input';
// import { LoginUserArgs } from '../dto/login-user.args.';

// @Injectable()
// export class DecodeTokenIdPipe
//   implements PipeTransform<LoginUserArgs, DecodedItemInput>
// {
//   transform(loginUserArgs: LoginUserArgs): DecodedItemInput {
//     const decodedValue = Buffer.from(
//       loginUserArgs.idToken,
//       'base64',
//     ).toString();

//     console.log('ドヤ');
//     console.log(decodedValue);

//     return { email: 'test1@example.com', secretKey: 'agegege' };
//   }
// }

import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class DecodeTokenIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('ほんとか？');
    console.log(value);
    return { email: 'test1@example.com', secret: 'tete' };
  }
}
