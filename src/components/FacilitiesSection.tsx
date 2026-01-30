'use client';

const FacilitiesSection = () => {
  const facilities = [
    {
      id: 1,
      name: 'Modern Classrooms',
      description: 'Bright, spacious, well-ventilated classrooms with smart boards, age-appropriate furniture, and interactive learning corners.',
      features: ['Smart Boards', 'Interactive Displays', 'Learning Corners', 'Proper Ventilation'],
      icon: '🏫',
    },
    {
      id: 2,
      name: 'Safe Playgrounds',
      description: 'Secure outdoor spaces with modern play equipment, soft flooring, and dedicated zones for different age groups.',
      features: ['Play Equipment', 'Soft Flooring', 'Shaded Areas', 'Safety Standards'],
      icon: '🎪',
    },
    {
      id: 3,
      name: 'Sports Facilities',
      description: 'Comprehensive sports grounds including fields for football, basketball courts, and swimming areas.',
      features: ['Football Field', 'Basketball Court', 'Swimming Pool', 'Athletics Track'],
      icon: '⚽',
    },
    {
      id: 4,
      name: 'Library & Learning Center',
      description: 'Well-stocked library with thousands of books, digital resources, and quiet study areas for research and reading.',
      features: ['Extensive Book Collection', 'Digital Resources', 'Study Spaces', 'Research Center'],
      icon: '📚',
    },
    {
      id: 5,
      name: 'Laboratories & Tech Hub',
      description: 'Equipped science labs, computer labs, and innovation centers for hands-on STEM learning and coding.',
      features: ['Science Labs', 'Computer Lab', 'Coding Center', 'STEM Workshops'],
      icon: '🔬',
    },
    {
      id: 6,
      name: 'Health & Dining',
      description: 'Fully-equipped medical clinic, nutritious cafeteria with hygienic food preparation, and rest areas for wellness.',
      features: ['Medical Clinic', 'Hygienic Cafeteria', 'Nutrition Focus', 'Rest Areas'],
      icon: '🏥',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">World-Class Facilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We invest in state-of-the-art infrastructure to create an inspiring and conducive learning environment.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-20 h-20 bg-brand-red/10 rounded-full group-hover:bg-brand-red/20 transition-all"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{facility.name}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{facility.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Highlight */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '15+', label: 'Classrooms' },
            { number: '80+', label: 'Staff Members' },
            { number: '5000+', label: 'Books in Library' },
            { number: '24/7', label: 'Security' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-brand-blue to-brand-blue/80 text-white p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <p className="text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
