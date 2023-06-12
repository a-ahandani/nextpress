import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "@/components/container";
import ContentList from "@/components/content-list";
import Header from "@/components/header";
import Layout from "@/components/layout";
import ContentTitle from "@/components/content-title";
import { getAllTagsWithSlug, getNode } from "@/lib/api";

export default function Tag({ content, preview }) {
  const router = useRouter();

  if (!router.isFallback && !content?.name) {
    return <ErrorPage statusCode={404} />;
  }
  const label = `${content?.__typename}: ${content?.name}`;
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
                <ContentList label={label} posts={content.posts?.nodes} />
              )}
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getNode({ uri: `tag/${params?.slug}` });
  return {
    props: {
      content: data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTagsWithSlug();
  return {
    paths: allTags.map(({ slug }) => `/tags/${slug}`) || [],
    fallback: true,
  };
};
