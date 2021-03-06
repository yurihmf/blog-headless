import React from 'react';
import { PostCard } from '.';

const RelevantPosts = ({relevantPosts}) => {
  return (
    <section className="col-span-4">
        <h3 className="font-lexend font-normal text-white text-2xl leading-5 w-max pr-6 pb-3.5 mb-3.5 border-b-2 border-purple-light">Posts Relevantes</h3>
        <div className="flex flex-col gap-y-11">
        {relevantPosts.filter(post => post.node.featured == true).map(relevantPost => (
          <PostCard posts={relevantPost} key={relevantPost.node.slug}/>    
        ))}
        </div>
    </section>
    );
};

export default RelevantPosts;
