import React from 'react';
import { LatestPosts, PostContent } from '../../components';

import { getLast6Posts, getPostContent, getPosts } from '../../services/';



const Post = ({ post,latestPosts }) => {
  return (
    <section className="container mx-auto px-10 grid grid-cols-12">
        <div className="col-span-12">
            <PostContent post={post}/>
        </div>
        <div className="col-span-12">
            <LatestPosts latestPosts={latestPosts}/>
        </div>
    </section>
  );
};

export default Post;

export async function getStaticProps({params}){
    const data = (await getPostContent(params.slug)) || [];
    const latestPosts = (await getLast6Posts()) || [];
    return{ 
      props: { 
        post: data,
        latestPosts: latestPosts
      }, 
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();

    return { 
        paths: posts.map(({ node : { slug }}) => ({ params: { slug }})),
        fallback: false
    }
}