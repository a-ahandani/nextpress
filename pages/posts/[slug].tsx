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
  console.log(post);
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
                <title>{`${post.title} | Ahandani.com`}</title>
                <meta property="og:image" content={post.featuredImage} />
                <meta name="description" content={post.excerpt} />

                <meta property="og:type" content="website" />
                <meta
                  property="og:url"
                  content={`https://ahandani.com/posts/${post.slug}`}
                />
                <meta
                  property="og:title"
                  content={`${post.title} | Ahandani.com`}
                />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.featuredImage} />

                <meta property="twitter:card" content={post.featuredImage} />
                <meta
                  property="twitter:url"
                  content={`https://ahandani.com/posts/${post.slug}`}
                />
                <meta
                  property="twitter:title"
                  content={`${post.title} | Ahandani.com`}
                />
                <meta property="twitter:description" content={post.excerpt} />
                <meta property="twitter:image" content={post.featuredImage} />
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
