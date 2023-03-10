import Head from "next/head";
import NextError from "next/error";
import { Card } from "@/components/Card";
import { Gallery } from "@/components/Gallery";
import { Layout } from "@/components/Layout";
import { useProducts } from "@/hooks/useProducts";
import type { GetStaticProps } from "next/types";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { getProductsFromSource } from "@/services";

export const getStaticProps: GetStaticProps<{
  dehydratedState: DehydratedState;
}> = async function () {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["products"], getProductsFromSource);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  const { data: products, isError, error } = useProducts();
  return (
    <>
      <Head>
        <title>Products Display</title>
        <meta name="description" content="Products Display Frontend" />
      </Head>

      <Layout>
        <Gallery>
          {products &&
            products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          {isError && (
            <NextError title={error.message} statusCode={error.code} />
          )}
        </Gallery>
      </Layout>
    </>
  );
}
