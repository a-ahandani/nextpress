import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "@/components/container";
import ContentBody from "@/components/content-body";
import Header from "@/components/header";
import ContentHeader from "@/components/content-header";
import Layout from "@/components/layout";
import ContentTitle from "@/components/content-title";
import Tags from "@/components/tags";
import { getAllPagesWithSlug, getNode } from "@/lib/api";

export default function Page({ content, preview }) {
  const router = useRouter();

  if (!router.isFallback && !content?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(content);

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
                <title>{`${content.title} | Ahandani.com`}</title>
                <meta property="og:image" content={content.featuredImage} />
                <meta name="description" content="Software developer." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ahandani.com/" />
                <meta
                  property="og:title"
                  content={`${content.title} | Ahandani.com`}
                />
                <meta property="og:description" content="Software developer." />
                <meta property="og:image" content={content.featuredImage} />

                <meta property="twitter:card" content={content.featuredImage} />
                <meta property="twitter:url" content="https://ahandani.com/" />
                <meta
                  property="twitter:title"
                  content={`${content.title} | Ahandani.com`}
                />
                <meta
                  property="twitter:description"
                  content="Software developer."
                />
                <meta
                  property="twitter:image"
                  content={content.featuredImage}
                />
              </Head>
              <ContentHeader
                title={content.title}
                coverImage={content.featuredImage}
                date={content.date}
                author={content.author}
                categories={content.categories}
                tags={[]}
              />
              <ContentBody content={content.content} />
              <footer>
                {content?.tags?.edges.length > 0 && (
                  <Tags tags={content.tags} />
                )}
              </footer>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getNode({ uri: params?.slug });
  return {
    props: {
      content: data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await getAllPagesWithSlug();
  return {
    paths: allPages.map(({ slug }) => `/pages/${slug}`) || [],
    fallback: true,
  };
};
