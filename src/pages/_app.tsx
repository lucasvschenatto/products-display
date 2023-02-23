import GlobalStyle from "@/styles/GlobalStyles";
import { darkTheme } from "@/styles/theme";
import {
  Hydrate,
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode, useState } from "react";
import { ThemeProvider, useTheme } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const config: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
    mutations: {
      retry: 5,
      retryDelay: 500,
    },
  },
};

const ThemedSkeleton = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <SkeletonTheme
      baseColor={theme.colors.darkGrey}
      highlightColor={theme.colors.grey}
    >
      {children}
    </SkeletonTheme>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(config));
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <ThemedSkeleton>
              <Component {...pageProps} />
            </ThemedSkeleton>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
