import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';
import { buildSchema } from 'type-graphql';
import { RoomResolver } from '../../graphql/room/room.resolver';
import { HostResolver } from '../../graphql/hosts/host.resolver';

const schema = await buildSchema({
  resolvers: [HostResolver, RoomResolver],
});

const server = new ApolloServer({
  schema,
  context: ({ req, res }: { req: NextApiRequest; res: NextApiResponse }) => ({
    req,
    res,
  }),
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
