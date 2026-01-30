'use client';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Babirye Peace',
      role: 'Parent',
      text: 'Kutya Mukama has transformed my child\'s life. They have provided excellent education and support. I am truly grateful for everything they\'ve done.',
      image: '/IMG/p1.jpeg',
    },
    {
      id: 2,
      name: 'Musisi Paul',
      role: 'Parent',
      text: 'My child has blossomed since joining. She\'s more confident and loves learning. I can see a bright future ahead for her thanks to the dedicated teachers.',
      image: '/IMG/p2.jpeg',
    },
    {
      id: 3,
      name: 'Nalumu Jane',
      role: 'Parent',
      text: 'Now I see my son thriving academically and socially. The school has instilled in him a love for learning and strong values.',
      image: '/IMG/p3.jpeg',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#FCC953]">
          <div className="flex items-center mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold text-[#0A0350]">{testimonial.name}</h3>
              <div className="text-yellow-400 text-sm">★★★★★</div>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed italic">
            "{testimonial.text}"
          </p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsCarousel;
