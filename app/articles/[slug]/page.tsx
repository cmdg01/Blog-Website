import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getArticleBySlug } from '@/lib/api';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  try {
    console.log('Fetching article with slug:', params.slug);
    const article = await getArticleBySlug(params.slug);

    if (!article) {
      console.log('Article not found, rendering custom not found page');
      return (
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-xl text-gray-600">
            Sorry, we could not find the article you are looking for.
          </p>
        </div>
      );
    }

    return (
      <article className="max-w-3xl mx-auto">
        {article.image_url && (
          <div className="relative w-full h-64 mb-8">
            <Image
              src={article.image_url}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="prose lg:prose-xl">
          {article.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </article>
    );
  } catch (error) {
    console.error('Error fetching article:', error);
    notFound();
  }
}