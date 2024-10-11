import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Facebook, MessageCircle, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-600">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Have a question or feedback? Connect with us on social media!
      </p>
      <div className="flex justify-center space-x-6 mb-12">
        <Link href="https://twitter.com/wallacemukoka?s=21" target="_blank" className="flex items-center space-x-2 transition-transform transform hover:scale-110">
          <Twitter className="w-8 h-8 text-blue-500 transition-transform duration-300 hover:scale-125" />
          <span className="text-lg font-semibold">Twitter</span>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100069923168873&mibextid=LQQJ4d" target="_blank" className="flex items-center space-x-2 transition-transform transform hover:scale-110">
          <Facebook className="w-8 h-8 text-blue-600 transition-transform duration-300 hover:scale-125" />
          <span className="text-lg font-semibold">Facebook</span>
        </Link>
        <Link href="https://www.instagram.com/wallamrfresh_king" target="_blank" className="flex items-center space-x-2 transition-transform transform hover:scale-110">
          <Instagram className="w-8 h-8 text-pink-500 transition-transform duration-300 hover:scale-125" />
          <span className="text-lg font-semibold">Instagram</span>
        </Link>
      </div>
      <div className="text-center mb-6">
        <Image
          src="/contact-us-1908762_1920.png" // Ensure you have a relevant image
          alt="Contact Us"
          width={600}
          height={300}
          className="rounded-lg shadow-md mb-6"
        />
      </div>
      <p className="text-center text-gray-500 mb-4">
        We look forward to hearing from you!
      </p>
      <div className="text-center">
        <h2 className="text-lg font-semibold">Contact Numbers:</h2>
        <p className="text-gray-600">+263774707637</p>
        <p className="text-gray-600">+263771708658</p>
      </div>
    </div>
  );
}