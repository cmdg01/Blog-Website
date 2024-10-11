export interface ArticleData {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  updated_at: string;
  tags: string[];
  slug: string;
  excerpt: string;
  is_published: boolean;
  category: string;
  is_featured?: boolean;
  image_url?: string;
  published_at: string;
}

export interface ArticleFormData {
  title: string;
  content: string;
  tags: string[];
  excerpt: string;
  category: string;
}

export interface ArticleListItem {
  id: number;
  title: string;
  author: string;
  created_at: string;
  tags: string[];
  excerpt: string;
  slug: string;
  category: string;
  is_featured?: boolean;
  image_url?: string;
  
  
}
