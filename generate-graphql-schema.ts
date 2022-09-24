import { NestFactory } from '@nestjs/core';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql';
import { join } from 'path';
import { writeFileSync } from 'fs';
import { printSchema } from 'graphql';
import { AuthResolver } from './src/auth/auth.resolver';
import { UsersResolver } from './src/users/users.resolver';

const resolvers = [AuthResolver, UsersResolver];

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create(resolvers);
  console.log(printSchema(schema));
  writeFileSync(join(process.cwd(), `schema.gql`), printSchema(schema));
}

generateSchema();
