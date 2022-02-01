import moment from 'moment';
import Link from 'next/link';
import React from 'react';

const PostCardDefinition = ({posts}) => {
  // console.log(posts);
  return (
        posts.map((post) => (
        <article key={post.node.slug} className="flex">
          <div className="relative w-48 h-36 p-2 mr-4">
            <img src={post.node.thumb.url} alt={post.node.slug}  className="absolute inset-0 z-0 w-full h-full object-cover "/>
            <span className="text-white font-lexend relative z-10 text-sm bg-purple-light px-4 max-w-max rounded-sm">{post.node.categories.map(category => category.title)}</span>
          </div>
          <div className="flex flex-col gap-y-2.5 w-3/5">
              <div className="font-lexend text-sm text-white font-normal leading-5">{post.node.title}</div>
              <div className="font-inter text-xs text-white font-normal leading-5">{post.node.subtitle}</div>
              <div className="font-inter text-xs text-white font-semibold leading-5">{moment(post.node.createdAt).format('DD/MM/YYYY')}</div>
              <Link href={`http://localhost:3000/post/${post.node.slug}`}>
                <p className=" text-white font-inter font-medium text-sm bg-purple-light px-4 py-1 max-w-max rounded-sm cursor-pointer transition all ease-in-out delay-75 hover:bg-white hover:text-purple-light">Ler notícias</p>
              </Link>
          </div>
        </article>
        ))
      );
};

export default PostCardDefinition;
