import Link from 'next/link';
import React from 'react';

const Banner = ({ posts }) => {
  return (
    <section className="grid grid-cols-12 grid-rows-6 font-lexend text-slate-200 pt-12 gap-y-6 gap-x-4">
      <h1 className="text-4xl col-span-3 row-span-1 mb-2 font-normal">Mundo nerd? Naped1</h1>
      <p className="col-span-4 row-span-1 row-start-2 font-inter font-medium">O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
      {posts.filter(post => post.node.postLargeBanner == true).map(postLargeBanner => (
        <Link href={postLargeBanner.node.slug}>
          <article key={postLargeBanner.node.slug} className="col-span-8 row-span-4 col-start-1 row-start-3 w-full h-full relative flex flex-col justify-between p-4 z-20 after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:to-black cursor-pointer">
            <img src={postLargeBanner.node.thumb.url} alt={postLargeBanner.node.slug} className="absolute inset-0 z-0 w-full h-full object-cover" />
            <span className="relative z-10 text-sm bg-purple-light px-4 max-w-max rounded-sm">{postLargeBanner.node.categories.map(category => category.title)}</span>
            <h3 className="relative z-10">{postLargeBanner.node.title}</h3>
          </article>
        </Link>
      ))}
      <div className="col-span-4 row-span-4 col-start-9 row-start-3 flex flex-col gap-y-2">
        {posts.filter(post => post.node.postBanner == true).map(postsBanner => (
          <Link href={postsBanner.node.slug}>
            <article key={postsBanner.node.slug} className="w-full h-full relative flex flex-col justify-between p-4 z-20 after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:to-black cursor-pointer">
              <img src={postsBanner.node.thumb.url} alt={postsBanner.node.slug} className="absolute inset-0 z-0 w-full h-full object-cover" />
              <span className="relative z-10 text-sm bg-purple-light px-4 max-w-max rounded-sm">{postsBanner.node.categories.map(category => category.title)}</span>
              <h3 className="relative z-10">{postsBanner.node.title}</h3>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Banner;