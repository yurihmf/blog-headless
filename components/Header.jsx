import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const categories = [{name: 'Animes', slug: 'animes'}, {name: 'Séries', slug: 'series'}, {name: 'Filmes', slug: 'filmes'}]

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex justify-between container px-10 mx-auto py-8"> 
      <Link href="/">
        <h3 className="text-purple-light text-2xl cursor-pointer font-lexend">Naped</h3>
      </Link>
      <nav className="flex items-center gap-x-20">
      <Link href="/">
              <span className={`text-slate-200 text-base cursor-pointer border-purple-light font-inter
              ${router.pathname == "/" ? "border-b-2" : ""}`}>
                Home
              </span>
            </Link>
        {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className={`text-slate-200 text-base cursor-pointer border-purple-light font-inter
              ${router.pathname == `/category/${category.slug}` ? "border-b-2" : ""}`}>
                {category.name}
              </span>
            </Link>
        ))}
        <Link href={`/account`}>
            <span className="flex items-center text-slate-200 ml-10 border border-purple-light rounded-xl px-5 py-1 text-sm hover:bg-purple-light cursor-pointer font-lexend transition all ease-in-out delay-75">Minha conta</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
