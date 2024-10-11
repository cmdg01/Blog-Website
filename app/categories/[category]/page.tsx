import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BlogCardComponent } from '@/components/blog-card';
import { getCategories, getArticlesByCategory } from '@/lib/api';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === params.category);
  const articles = await getArticlesByCategory(params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-6">{category.name}</h1>
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`}>
              <BlogCardComponent
                imageUrl={article.image_url || ''}
                category={category.name}
                title={article.title}
                date={new Date(article.published_at).toLocaleDateString()}
              />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600">No articles found in this category.</p>
      )}
    </div>
  );
}