'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BlogCardComponent } from '@/components/blog-card';
import { getArticles } from '@/lib/api';
import { ArticleListItem } from '@/types/article';
import Image from 'next/image';

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
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        {/* Loading Hero Section */}
        <div className="relative h-[60vh] bg-gray-200 animate-pulse mb-12">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-64 h-8 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-96 h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-32 h-10 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Featured Articles Section */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-48 h-8 bg-gray-300 rounded animate-pulse mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-4 space-y-3">
                  <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-full h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Loading progress indicator */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-600 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-green-600 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            <span className="ml-2 text-gray-600 font-medium">Loading articles...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to Wallace Mukoka</h1>
          <p className="mt-4 text-lg">
            Your go-to source for the latest insights, tutorials, and trends in sustainable agriculture, gardening, and farming practices.
          </p>
          <Link href="#featured-articles">
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 mt-4">
              Explore Articles
            </Button>
          </Link>
        </div>
        <Image
          src="/hero-agriculture.jpg"
          alt="Agricultural Background"
          fill
          className="object-cover"
          priority
        />
      </header>

      {/* Featured Articles Section */}
      <section id="featured-articles" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Motivational Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`}>
              <BlogCardComponent
                imageUrl={article.image_url || '/placeholder.svg?height=300&width=400'}
              
                title={article.title}
                date={new Date(article.created_at).toLocaleDateString()}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Agricultural Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`}>
              <BlogCardComponent
                imageUrl={article.image_url || '/placeholder.svg?height=300&width=400'}
            
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