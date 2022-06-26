import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Hydrate, QueryClientProvider } from 'react-query';
import { queryClient } from '../lib/requestClients';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
