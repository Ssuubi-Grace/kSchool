'use client';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: 'Qualified Teachers',
      description: 'Experienced, certified educators dedicated to student success',
      bgColor: 'bg-gradient-to-br from-green-400 to-green-500',
      iconBg: 'bg-yellow-400',
      image: '/IMG/teacher.jpg' // You can replace with actual teacher image
    },
    {
      id: 2,
      title: 'Safe Environment',
      description: 'Secure, nurturing space where children thrive',
      bgColor: 'bg-gradient-to-br from-purple-400 to-purple-500',
      iconBg: 'bg-yellow-400',
      image: '/IMG/safety.jpg' // You can replace with actual safety image
    },
    {
      id: 3,
      title: 'Modern Curriculum',
      description: 'Up-to-date educational programs that prepare for the future',
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-500',
      iconBg: 'bg-yellow-400',
      image: '/IMG/curriculum.jpg' // You can replace with actual curriculum image
    },
    {
      id: 4,
      title: 'Small Class Sizes',
      description: 'Individual attention for every student\'s needs',
      bgColor: 'bg-gradient-to-br from-red-400 to-red-500',
      iconBg: 'bg-yellow-400',
      image: '/IMG/classroom.jpg' // You can replace with actual classroom image
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-6xl text-[#0A0350] font-bold mb-8">
            Why Choose Kutya Mukama?
          </h2>

          <div className="my-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-[#FCC953] to-red-500 rounded-full"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-[#0A0350] rounded-full"></div>
              <div className="w-4 h-1 bg-[#0A0350] rounded-full"></div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            We provide more than just education—we build futures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="relative"
            >
              {/* Circular Icon - Half outside, half inside */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-24 h-24 ${reason.iconBg} rounded-full shadow-lg flex items-center justify-center border-4 border-white`}>
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-16 h-16 rounded-full object-cover"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="text-3xl">
                            ${reason.id === 1 ? '👨‍🏫' : reason.id === 2 ? '🛡️' : reason.id === 3 ? '📚' : '👥'}
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className={`${reason.bgColor} p-8 pt-16 pb-10 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 hover:scale-105 text-white relative overflow-hidden min-h-[280px] flex flex-col justify-center`}
              >
                {/* Title */}
                <h3 className="text-2xl font-bold mb-6 leading-tight mt-4">{reason.title}</h3>

                {/* Description */}
                <p className="text-white/95 leading-relaxed text-base px-2">
                  {reason.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 left-2 w-4 h-4 bg-white/5 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
