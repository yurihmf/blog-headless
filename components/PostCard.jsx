import React from 'react';

const PostCard = ({posts}) => {
  return (
    posts.map((post) =>{
      <Link href={post.node.slug}>
        <article key={post.node.slug} className="w-full h-full relative flex flex-col justify-between p-4 z-20 after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:to-black cursor-pointer">
          <img src={post.node.thumb.url} alt={post.node.slug} className="absolute inset-0 z-0 w-full h-full object-cover" />
          <span className="relative z-10 text-sm bg-purple-light px-4 max-w-max rounded-sm">{post.node.categories.map(category => category.title)}</span>
          <h3 className="relative z-10">{post.node.title}</h3>
        </article>
      </Link>
    })
  );
};

export default PostCard;
