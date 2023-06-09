import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { RectangleStackIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "@/components/container";
import ContentList from "@/components/content-list";
import Header from "@/components/header";
import Layout from "@/components/layout";
import ContentTitle from "@/components/content-title";
import { getAllCategoriesWithSlug, getNode } from "@/lib/api";

export default function Category({ content, preview }) {
  const router = useRouter();

  if (!router.isFallback && !content?.name) {
    return <ErrorPage statusCode={404} />;
  }
  const label = `${content?.name}`;
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <ContentTitle>Loading…</ContentTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${label} | Ahandani.com`}</title>
              </Head>
              {content.posts?.nodes?.length > 0 && (
                <ContentList label={<><RectangleStackIcon title={content?.__typename} className="h-16 mr-4 " />
                  {label}</>} posts={content.posts?.nodes} />
              )}
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getNode({ uri: `category/${params?.slug}` });
  return {
    props: {
      content: data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allCategories = await getAllCategoriesWithSlug();
  return {
    paths: allCategories.map(({ slug }) => `/categories/${slug}`) || [],
    fallback: true,
  };
};
