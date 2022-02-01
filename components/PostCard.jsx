import Link from 'next/link';
import React from 'react';

const PostCard = ({posts}) => {
  return (
      <Link href={`http://localhost:3000/post/${posts.node.slug}`} key={posts.node.slug} className="hover:translate-x-44">
        <article key={posts.node.slug} className="w-full h-60 relative flex flex-col justify-between p-4 z-20 after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:z-10 after:bg-gradient-to-b after:from-transparent after:to-black cursor-pointer transition-all hover:gap-y-4 hover:py-20">
          <img src={posts.node.thumb.url} alt={posts.node.slug} className="absolute inset-0 z-0 w-full h-full object-cover" />
          <span className="relative z-20 text-sm text-white leading-5 font-lexend bg-purple-light px-4 max-w-max rounded-sm">{posts.node.categories.map(category => category.title)}</span>
          <h3 className="relative z-20 text-sm text-white leading-5 font-lexend">{posts.node.title}</h3>
        </article>
      </Link>
  );
};

export default PostCard;
