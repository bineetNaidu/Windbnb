import { GraphQLClient } from 'graphql-request';
import { QueryClient } from 'react-query';
import { getSdk } from './graphql';

const gqlClient = new GraphQLClient('http://localhost:3000/api/graphql');

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const {
  getRoom,
  getRooms,
  createRoom,
  deleteRoom,
  createHost,
  getHost,
} = getSdk(gqlClient);
