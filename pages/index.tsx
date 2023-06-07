import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import { CMS_NAME } from '@/lib/constants'

export default function Index({ allPosts, allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges
  console.log(edges)
  return (
    <Layout preview={preview}>
      <Container>
        <Intro />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
