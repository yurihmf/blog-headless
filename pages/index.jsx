import Head from 'next/head'
import { Banner, ContentHome, RelevantPosts } from '../components'

import { getLast3Posts, getPosts } from '../services';

export default function Home({posts}) {
  // console.log(posts);
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog - Codelandia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lexend+Deca:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Banner posts={posts}/>
      <section className="grid grid-cols-12 gap-x-4 mt-12">
          <ContentHome posts={posts}/>
          <RelevantPosts relevantPosts={posts}/>
      </section>
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];
  return{ 
    props: { posts },
  }
}
