import React from 'react';
import { Footer, PostCard } from '../../components';
import { getCategories, getCategoryContent, getPostsByCategory } from '../../services';

function CategoryPosts({posts, category}) {
    const categoryContent = category.categories[0];

  return (
    <>
        <section className="container mx-auto px-10 grid grid-cols-12">
            <div className="flex flex-col gap-y-6 col-span-12 relative h-72 justify-center px-8 mb-10">
                <img src={categoryContent.categoryImage.url} alt={categoryContent.slug} className="absolute inset-0 z-0 w-full h-full object-cover"/>
                <h1 className="relative z-10 text-white font-lexend font-normal text-5xl">{categoryContent.title}</h1>
                <p className="relative z-10 text-gray-desc font-inter font-medium text-xl w-3/6">{categoryContent.description}</p>
            </div>
            {/* <div className="col-span-12 flex bg-input px-6 py-4 gap-x-2">
                <input type="text" name="search" placeholder="Quer ajuda na procura? Pesquise aqui" className="flex-1 bg-transparent text-xl text-white"/>
                <button className="w-auto h-auto cursor-pointer">
                    <img src="/lupa.svg" alt="Procure aqui!" className="w-auto h-auto"/>
                </button>
            </div> */}
            <div className="col-span-12 mt-24">
                <div className="grid grid-cols-12 grid-rows-6 gap-12">
                {posts.map(post => (
                    <div className="col-span-4 row-span-3" key={post.node.slug}>
                    <PostCard posts={post}/>    
                    </div>
                ))}
            </div>
        </div>
        </section>
        <Footer/>
    </>
  );
}

export default CategoryPosts;

export async function getStaticProps({params}){
    const data = (await getPostsByCategory(params.slug)) || [];
    const category = (await getCategoryContent(params.slug)) || [];
    return{ 
      props: { 
          posts: data,
          category
        }
    }
}

export async function getStaticPaths() {
    const {categories} = await getCategories();

    return { 
        paths: categories.map(({slug}) => ({params: { slug }})),
        fallback: false
    }
}