'use client';

import Image from 'next/image';
import Link from 'next/link';

const FeaturedNews = () => {
  const posts = [
    {
      id: 1,
      title: 'New School Library Opens for Reading Programs',
      excerpt: 'We are excited to announce the opening of our new library facility designed to foster a love of reading among our students.',
      image: '/IMG/Gal2.jpg',
      date: 'January 15, 2026',
      category: 'News',
    },
    {
      id: 2,
      title: 'Annual Sports Day Celebrates Achievement',
      excerpt: 'Our students showcased their talents and teamwork in this year\'s exciting sports day event with record participation.',
      image: '/IMG/Gal3.jpg',
      date: 'January 10, 2026',
      category: 'Events',
    },
    {
      id: 3,
      title: 'Meet Our Dedicated Teaching Staff',
      excerpt: 'Our team of passionate educators is committed to providing quality education and nurturing the next generation of leaders.',
      image: '/IMG/Gal4.jpg',
      date: 'January 5, 2026',
      category: 'Team',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Latest News & Updates</h2>
          <p className="text-gray-600">Stay informed about what's happening at Kutya Mukama</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow hover:scale-105 transform duration-300">
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href="/about"
                  className="inline-block text-brand-red hover:text-brand-blue font-semibold transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-block bg-brand-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
