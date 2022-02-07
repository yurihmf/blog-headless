import Head from 'next/head'
import { Banner, ContentHome, Footer, LatestPosts, RelevantPosts } from '../components'

import { getLast6Posts, getPosts } from '../services';

export default function Home({posts, latestPosts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog - Codelandia</title>
      </Head>
      <Banner posts={posts}/>
      <section className="grid lg:grid-cols-12 grid-cols-1 gap-x-4 mt-12">
          <ContentHome posts={posts}/>
          <RelevantPosts relevantPosts={posts}/>
          <LatestPosts latestPosts={latestPosts} />
      </section>
      <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];
  const latestPosts = (await getLast6Posts()) || [];
  return{ 
    props: { 
      posts,
      latestPosts
    },
  }
}
