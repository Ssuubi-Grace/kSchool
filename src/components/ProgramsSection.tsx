'use client';

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      name: 'Nursery (Age 2-4)',
      description: 'Early foundational learning through play-based activities. Focus on sensory development, motor skills, and social interaction.',
      features: ['Play-Based Learning', 'Social Skills', 'Motor Development', 'Language Building'],
      color: 'from-pink-100 to-pink-50',
      icon: '🎨',
    },
    {
      id: 2,
      name: 'Kindergarten (Age 4-5)',
      description: 'Structured pre-primary education preparing children for primary school with balanced academic and creative activities.',
      features: ['Reading & Writing', 'Basic Math', 'Creative Arts', 'Physical Education'],
      color: 'from-yellow-100 to-yellow-50',
      icon: '✏️',
    },
    {
      id: 3,
      name: 'Primary One-Three (Age 5-8)',
      description: 'Foundation years building core competencies in literacy, numeracy, and basic sciences with integrated learning.',
      features: ['Literacy Skills', 'Numeracy', 'Sciences', 'Social Studies'],
      color: 'from-blue-100 to-blue-50',
      icon: '📚',
    },
    {
      id: 4,
      name: 'Primary Four-Seven (Age 8-13)',
      description: 'Advanced curriculum preparing for national exams with emphasis on critical thinking, research, and specialist subjects.',
      features: ['Advanced Academics', 'STEM Focus', 'Research Skills', 'Exam Preparation'],
      color: 'from-green-100 to-green-50',
      icon: '🚀',
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-[#0A0350] font-bold mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive education from nursery through primary levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quality Education Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-[#FCC953] to-yellow-400 flex items-center justify-center">
              <i className="fas fa-book-open text-7xl text-[#0A0350]"></i>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0A0350] mb-4">Quality Education</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Rigorous academic curriculum aligned with national standards, preparing students for future success.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>National curriculum standards</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Qualified teaching staff</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Modern teaching methods</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Safe Environment Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center">
              <i className="fas fa-shield-alt text-7xl text-white"></i>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0A0350] mb-4">Safe Environment</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Secure, nurturing space where every child feels valued, protected, and free to learn.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>24/7 security measures</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Child protection policies</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Supportive staff</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Holistic Development Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-gradient-to-br from-[#0A0350] to-blue-600 flex items-center justify-center">
              <i className="fas fa-users text-7xl text-white"></i>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0A0350] mb-4">Holistic Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sports, arts, and life skills programs that nurture well-rounded, confident individuals.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Sports and athletics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Music and arts programs</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span>Life skills training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
