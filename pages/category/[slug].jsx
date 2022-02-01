import React from 'react';
import { PostCard } from '../../components';
import { getCategories, getCategoryContent, getPostsByCategory } from '../../services';

function CategoryPosts({posts, category}) {
    const categoryContent = category.categories[0];
  return (
    <section className="container mx-auto px-10 grid grid-cols-12">
        <div className="flex flex-col gap-y-6 col-span-12 relative">
            <img src={categoryContent.categoryImage.url} alt={categoryContent.slug} />
            <h1 className="">{categoryContent.title}</h1>
            <p className="">{categoryContent.description}</p>
        </div>
        <div className="col-span-12">
            <input type="text" name="search" placeholder="Quer ajuda na procura? Pesquise aqui"/>
            <img src="/lupa.svg" alt="Procure aqui!" />
        </div>
        <div className="col-span-12 mt-24">
            <div className="grid grid-cols-12 grid-rows-6 gap-4">
            {posts.map(post => (
                <div className="col-span-4 row-span-3" key={post.node.slug}>
                <PostCard posts={post}/>    
                </div>
            ))}
        </div>
    </div>
    </section>
  );
}

export default CategoryPosts;

export async function getStaticProps({params}){
    const data = (await getPostsByCategory(params.slug)) || [];
    const category = (await getCategoryContent(params.slug)) || [];
    console.log(category)
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