import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Avatar from "@/components/avatar";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "@/components/container";
import ContentBody from "@/components/content-body";
import Header from "@/components/header";
import ContentHeader from "@/components/content-header";
import Layout from "@/components/layout";
import ContentTitle from "@/components/content-title";
import { getAllPostsWithSlug, getNode } from "@/lib/api";

export default function Post({ post, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

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
                <title>{`${post.title} | Ahandani.com`}</title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.mediaItemUrl}
                />
              </Head>
              <ContentHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
                tags={post.tags?.nodes}
              />
              <ContentBody content={post.content} />
              <footer className="flex justify-center">
                {post?.author?.node && (
                  <div className="">
                    <Avatar author={post?.author} />
                  </div>
                )}
              </footer>
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
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
