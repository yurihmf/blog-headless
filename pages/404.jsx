import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Custom404(){
    return(
        <>
            <Head>
                <title>404</title>
            </Head>
            <section className="flex items-center justify-start gap-x-40 w-full container px-10 py-40 mx-auto">
                <div className="flex flex-col gap-y-4 w-auto">
                    <h1 className="font-lexend font-normal text-5xl text-white w-3/5 leading-snug">Tenho más notícias para você!</h1>
                    <p className="font-inter text-white text-xl leading-8 w-3/5 font-normal ">A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</p>
                    <Link href="/">
                        <span className="text-white font-lexend font-normal text-lg bg-purple-light rounded w-fit px-4 py-2 mt-4 cursor-pointer hover:bg-white hover:text-purple-light transition-all">Voltar a home</span>
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                    <img src="/404.png" alt="Error 404" />
                    <p className="font-inter text-white text-xl leading-8 w-full font-normal text-center">Ups! Você chegou no espaço... volte para o mundo nerd!</p>
                </div>
            </section>
        </>
    )
}