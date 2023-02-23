import type { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import Head from "next/head";
import NextError from "next/error";
import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";
import { CardBig } from "@/components/Card";
import { Product } from "@/types/product";
import { getProduct } from "@/services/productService";
import { useProduct } from "@/hooks/useProduct";

export const getStaticPaths: GetStaticPaths = async function () {
  const productsAPI = `${process.env.HOST ?? ""}/api/products`;
  const response = await fetch(productsAPI);
  const products = (await response.json()) as Product[];

  return {
    paths: products.map(({ id }) => ({ params: { id: String(id) } })),
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps<
  { dehydratedState: DehydratedState; id: string },
  { id: string }
> = async function (context) {
  const queryClient = new QueryClient();
  const { params } = context;
  if (!params) {
    throw new Error("No param id");
  } else {
    await queryClient.prefetchQuery<Product, { code: number; message: string }>(
      ["product", params.id],
      () => getProduct(params.id)
    );
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        id: params.id,
      },
    };
  }
};

const ProductPage: NextPage<{ id: string }> = function ({ id }) {
  const { data: product, isError, error } = useProduct(id);
  return (
    <>
      <Head>
        <title>{`Product - ${product?.title ?? id}`}</title>
        {product && (
          <meta
            name="description"
            content={`Product - ${product.description}`}
          />
        )}
      </Head>
      <Layout>
        {product && <CardBig product={product} />}
        {isError && <NextError title={error.message} statusCode={error.code} />}
      </Layout>
    </>
  );
};
export default ProductPage;
