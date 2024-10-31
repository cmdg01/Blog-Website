'use client'

import Image from 'next/image';

interface BlogCardProps {
  imageUrl: string;
  title: string;
  date: string;
}

export function BlogCardComponent({ 
  imageUrl = '/placeholder.svg?height=300&width=400', 
  title = 'Your Captivating Article Title Goes Here', 
  date = 'January 1, 2023' 
}: BlogCardProps) {
  return (
    <div className="flex flex-col max-w-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full">
      <div className="relative flex-grow">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 hover:opacity-100" />
      </div>
      <div className="p-6 bg-white bg-opacity-80 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-90 hover:bg-green-50 flex-grow">
        <p className="text-gray-900 text-lg font-semibold mb-2">{title}</p>
        <p className="text-gray-600 text-sm">{date}</p>
      </div>
    </div>
  );
}