'use client';

const SchoolRoutines = () => {
  const routines = [
    { time: '7:30 AM', activity: 'School Arrival & Morning Assembly', description: 'Children arrive, flag salute, and brief morning announcements' },
    { time: '8:00 AM - 12:00 PM', activity: 'Core Academics', description: 'Mathematics, English, Sciences, Social Studies, and other subjects' },
    { time: '12:00 PM - 1:00 PM', activity: 'Lunch Break', description: 'Nutritious lunch followed by supervised outdoor play' },
    { time: '1:00 PM - 3:30 PM', activity: 'Afternoon Sessions', description: 'Continuation of academics, practical activities, and projects' },
    { time: '3:30 PM - 4:30 PM', activity: 'Co-Curricular Activities', description: 'Sports, arts, music, clubs, and skill-building programs' },
    { time: '4:30 PM', activity: 'School Dismissal', description: 'Organized departure with transport and parent pickups' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Daily School Programs & Routines</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A well-structured daily schedule that balances academics, physical activity, and skill development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-red to-brand-blue"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {routines.map((routine, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-6 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                    <div className="text-sm font-bold text-brand-red uppercase tracking-wide mb-2">{routine.time}</div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">{routine.activity}</h3>
                    <p className="text-gray-600">{routine.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex justify-center">
                  <div className="w-6 h-6 bg-brand-red rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Mobile Dot */}
                <div className="md:hidden flex items-start">
                  <div className="w-4 h-4 bg-brand-red rounded-full mt-2 mr-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Programs */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border-l-4 border-pink-500">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">🎨 Creative Arts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Visual Arts & Crafts</li>
              <li>✓ Music & Singing</li>
              <li>✓ Drama & Theater</li>
              <li>✓ Dance & Movement</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">⚽ Sports & PE</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Football & Basketball</li>
              <li>✓ Athletics & Track</li>
              <li>✓ Swimming Lessons</li>
              <li>✓ Gymnastics & Yoga</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">💻 Technology & Skills</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Computer Classes</li>
              <li>✓ Coding & Robotics</li>
              <li>✓ Digital Literacy</li>
              <li>✓ Innovation Workshops</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolRoutines;
