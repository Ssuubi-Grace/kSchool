'use client';

const CoreValues = () => {
  const values = [
    {
      id: 1,
      icon: '🎓',
      title: 'Quality Education',
      description: 'We provide a modern, comprehensive curriculum that develops critical thinking and practical skills.',
    },
    {
      id: 2,
      icon: '❤️',
      title: 'Child-Centered Care',
      description: 'Every child matters. We focus on individual growth, nurturing talents and addressing unique needs.',
    },
    {
      id: 3,
      icon: '🛡️',
      title: 'Safe Environment',
      description: 'A secure, clean, and welcoming environment where children learn, play, and grow with confidence.',
    },
    {
      id: 4,
      icon: '🤝',
      title: 'Community Values',
      description: 'We respect diversity, promote tolerance, and teach children to appreciate different cultures and beliefs.',
    },
    {
      id: 5,
      icon: '⭐',
      title: 'Excellence',
      description: 'We maintain high standards in academics, facilities, staffing, and student welfare and development.',
    },
    {
      id: 6,
      icon: '🌱',
      title: 'Holistic Growth',
      description: 'We nurture mental, physical, emotional, and spiritual development for well-rounded learners.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at Kutya Mukama, ensuring excellence and care in every aspect of education.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-brand-red"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
