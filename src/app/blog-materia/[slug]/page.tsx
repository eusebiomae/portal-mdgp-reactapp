export const fetchCache = 'force-no-store';

import { Blog } from "@/@types/Blog";
import BlogMateriaSection from "@/components/BlogMateriaSection/Index";
import FAB from "@/components/FAB/Index";
import { NextPage } from "next";
import { notFound } from "next/navigation";



async function fetchProduct(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`https://mdgp.dev.id360.net/api/blogs?slug=${slug}`,{
      cache: 'no-store',
    });
    const response = await res.json();
    return response.blog[0] || null;

  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

async function fetchCategory(slug: string): Promise<Blog[] | null> {
  try {
    const res = await fetch(`https://mdgp.dev.id360.net/api/blogs?categoria=${slug}`,{
      cache: 'no-store',
    });
    const response = await res.json();
    return response.blog || null;

  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}


const Index: NextPage = async ({params}:any) => { Promise<Blog | null>

    const post = await fetchProduct(params.slug);
    if(!post){
      return notFound();
    }

    if(!post.categoria.nome){
      return notFound();
    }

    const categoria = await fetchCategory(post.categoria.nome);
    if(!categoria){
      return notFound();
    }

    return (
      <main className="bg-white">      
        <BlogMateriaSection  id_produto='03afdbd66e561' post={post} categoria={categoria}/>
        <FAB />
      </main>
    );
  };
  
  export default Index;