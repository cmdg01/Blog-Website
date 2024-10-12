import { GetStaticProps } from 'next';
import { getBooks } from '@/lib/api';

type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  cover_image: string;
};

interface BooksProps {
  books: Book[];
}

export const getStaticProps: GetStaticProps<BooksProps> = async () => {
  try {
    const books = await getBooks();
    return {
      props: {
        books,
      },
    };
  } catch (error) {
    console.error('Error fetching books:', error);
    return {
      props: {
        books: [],
      },
    };
  }
};

export default function Books({ books }: BooksProps) {
  const handleDownload = (bookId: string) => {
    const downloadLink = 'https://drive.google.com/file/d/15B_RTlWv-Qog4DwArGBKUcIyzCpKpOML/view?usp=drivesdk';
    console.log(`Downloading book with ID: ${bookId}`);
    window.open(downloadLink, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={book.cover_image} alt={book.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <p className="text-gray-700 mb-4">{book.description}</p>
              <button
                onClick={() => handleDownload(book.id)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
