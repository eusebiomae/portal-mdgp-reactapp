export const fetchCache = 'force-no-store';

import BlogSection from "@/components/BlogSection/Index";
import FAB from "@/components/FAB/Index";

import type { Metadata } from 'next'
import { Blog } from "@/@types/Blog";
import { notFound } from "next/navigation";
 
export const metadata: Metadata = {
  title: 'BLOG | MDGP Incorporações',
  description: 'Acompanhe notícias sobre arquitetura, decoração e as novidades sobre os empreendimentos da MDGP Incorporações.',
}

async function fetchBlogPosts(): Promise<Blog[] | null> {
   try {

     const res = await fetch(`https://mdgp.dev.id360.net/api/blogs`,{
      cache: 'no-store',
     });
     const response = await res.json();
     return response.blogs.data || null;

   } catch (error) {
     console.error('Error fetching edicao:', error);
     return null;
   }
 }

const Index  = async ()  =>  {

  const blog = await fetchBlogPosts();
  if(!blog){
    return notFound();
  }

  return (
    <main className="bg-[#F5F5F5]">      
      <BlogSection  id_produto='03afdbd66e561' blog={blog}/>
      <FAB />
    </main>
  );
};

export default Index;
