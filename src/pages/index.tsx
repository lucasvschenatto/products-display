import Head from "next/head";
import NextError from "next/error";
import { Card, SkeletonCard } from "@/components/Card";
import { Gallery } from "@/components/Gallery";
import { Layout } from "@/components/Layout";
import { useProducts } from "@/hooks/useProducts";
import type { GetStaticProps } from "next/types";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { getProducts } from "@/services/productService";

export const getStaticProps: GetStaticProps<{
  dehydratedState: DehydratedState;
}> = async function () {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["products"], getProducts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  const { data: products, isError, isLoading, error } = useProducts();
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
          {isLoading &&
            new Array(6)
              .fill(null)
              .map((_, index) => <SkeletonCard key={index} />)}
          {isError && (
            <NextError title={error.message} statusCode={error.code} />
          )}
        </Gallery>
      </Layout>
    </>
  );
}
