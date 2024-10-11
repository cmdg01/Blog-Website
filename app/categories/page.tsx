import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getCategories } from '@/lib/api';

type Category = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  size?: 'small' | 'medium' | 'large';
};

export default async function CategoriesPage() {
  const categories: Category[] = await getCategories();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Explore Our Agricultural Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={`/categories/${category.slug}`}
            className={`group block ${
              category.size === 'large' ? 'sm:col-span-2 sm:row-span-2' :
              category.size === 'medium' ? 'sm:col-span-2' : ''
            }`}
          >
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full hover:shadow-xl">
              <div className="aspect-w-16 aspect-h-9">
                {category.image_url ? (
                  <Image
                    src={category.image_url}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
                <div className="flex items-center mt-2">
                  <span className="text-sm group-hover:text-green-300 transition-colors duration-300">
                    Explore {category.name}
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:text-green-300 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}