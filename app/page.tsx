'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BlogCardComponent } from '@/components/blog-card';
import { getArticles } from '@/lib/api';
import { ArticleListItem } from '@/types/article';

export default function HomePage() {
  const [articles, setArticles] = useState<ArticleListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const fetchedArticles = await getArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const featuredArticles = articles.filter(article => article.is_featured);
  const regularArticles = articles.filter(article => !article.is_featured);

  if (isLoading) {
    return <div className="text-center py-12">Loading articles...</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to Wallace Mukoka's Blog</h1>
          <p className="mt-4 text-lg">
            Your go-to source for the latest insights, tutorials, and trends in web development, design, and technology.
          </p>
          <Link href="#featured-articles">
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 mt-4">
              Explore Articles
            </Button>
          </Link>
        </div>
        <img
           src="/hero-agriculture.jpg" // Correct path with leading slash
           alt="Agricultural Background"
          className="object-cover w-full h-full"
        />
      </header>

      {/* Featured Articles Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`}>
              <BlogCardComponent
                imageUrl={article.image_url || '/placeholder.svg?height=300&width=400'}
                category={article.category}
                title={article.title}
                date={new Date(article.created_at).toLocaleDateString()}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`}>
              <BlogCardComponent
                imageUrl={article.image_url || '/placeholder.svg?height=300&width=400'}
                category={article.category}
                title={article.title}
                date={new Date(article.created_at).toLocaleDateString()}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}