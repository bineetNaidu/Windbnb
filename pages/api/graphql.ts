import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';
import { buildSchema } from 'type-graphql';
import { RoomResolver } from '../../graphql/room/room.resolver';

const schema = await buildSchema({
  resolvers: [RoomResolver],
});

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
