import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import Header from "@/components/header";
import PostHeader from "@/components/post-header";
import Layout from "@/components/layout";
import PostTitle from "@/components/post-title";
import Tags from "@/components/tags";
import { getAllPagesWithSlug, getNode } from "@/lib/api";

export default function Page({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;
  console.log({ post });
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${post.title} | Ahandani.com`}</title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              {/* <footer>
                {post?.tags?.edges.length > 0 && <Tags tags={post.tags} />}
              </footer> */}
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getNode({ uri: params?.slug });
  return {
    props: {
      preview,
      post: data,
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
