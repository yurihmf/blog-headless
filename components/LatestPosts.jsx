import React from 'react';
import PostCard from './PostCard';

const LatestPosts = ({latestPosts}) => {
  return (
    <section className="col-span-12 mt-24">
        <h3 className="font-lexend font-normal text-white text-2xl leading-5 w-fit pb-3.5 mb-3.5 border-b-2 border-purple-light">Últimos posts</h3>
        <div className="grid grid-cols-12 grid-rows-6 gap-4">
          {latestPosts.map(latestPost => (
            <div className="col-span-4 row-span-3" key={latestPost.node.slug}>
              <PostCard posts={latestPost}/>    
            </div>
          ))}
        </div>
    </section>
  );
};

export default LatestPosts;
