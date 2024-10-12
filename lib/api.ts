import { supabase } from './supabase'
import { ArticleData } from '@/types/article'

export async function getArticles(): Promise<ArticleData[]> {
  if (!supabase) throw new Error('Supabase client not initialized')
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data as ArticleData[]
}

export async function getArticleBySlug(slug: string): Promise<Pick<ArticleData, 'title' | 'content' | 'image_url'> | null> {
  if (!supabase) throw new Error('Supabase client not initialized')
  const { data, error } = await supabase
    .from('articles')
    .select('title,content,image_url')
    .eq('slug', slug)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') {
      console.log(`No article found with slug: ${slug}`);
      return null;
    }
    console.error('Error fetching article:', error);
    throw error;
  }
  return data;
}



export async function getArticlesByCategory(categorySlug: string): Promise<ArticleData[]> {
  if (!supabase) throw new Error('Supabase client not initialized')
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('category', categorySlug)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data as ArticleData[]
}


export async function getBooks() {
  if (!supabase) throw new Error('Supabase client not initialized');

  const { data, error } = await supabase
    .from('books')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

