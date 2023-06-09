import { GetStaticProps } from "next";
import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { getAllPostsForHome } from "@/lib/api";

export default function Index({ allPosts: { edges }, preview }) {
  const morePosts = edges;
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
