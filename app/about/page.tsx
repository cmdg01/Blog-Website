import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-5xl font-bold mb-8 text-center text-green-600">About Wallace Mukoka</h1>
      
      <div className="mb-12 relative">
        <Image
          src="/about-hero.jpg"
          alt="Agricultural Community"
          width={1000}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
          <p className="text-white text-2xl font-semibold px-4 text-center">
            Cultivating knowledge for a sustainable future
          </p>
        </div>
      </div>

      <div className="prose lg:prose-xl mb-12">
      <p>Our Agricultural Blog is dedicated to providing insights, tips, and resources for farmers, gardeners, and anyone interested in sustainable agriculture. We aim to foster a community that shares knowledge and promotes best practices in farming and gardening.</p>
        <p>
          With a focus on organic farming, permaculture, and innovative agricultural techniques, our platform serves as a hub for learning and sharing experiences.
        </p>
        <h2 className="text-3xl font-semibold mt-6">Our Mission</h2>
        <p>
          Our mission is to empower individuals and communities to grow their own food sustainably and responsibly. 
          We believe in the importance of local food systems and the positive impact they have on our environment and health.
        </p>
        <h2 className="text-3xl font-semibold mt-6">Join Our Community</h2>
        <p>
          Whether you're a seasoned farmer or a novice gardener, our blog has something for you. 
          Explore our articles, share your own stories, and connect with others who are passionate about agriculture.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-12">
        <Link href="/articles">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">Explore Articles</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Contact Us</Button>
        </Link>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Sustainability', 'Community', 'Innovation', 'Education'].map((value) => (
            <li key={value} className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}