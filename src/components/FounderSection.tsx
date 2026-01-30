'use client';

const FounderSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#0A0350] to-[#1b163f] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-6 px-6 py-2 bg-[#FCC953] rounded-full">
              <span className="text-[#0A0350] font-bold text-sm">FOUNDER'S MESSAGE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Sarah Muwonge
            </h2>
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              "I left my teaching job in the city to bring education to children in our village."
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              What started as teaching a few children to read has grown into the first school in Gitta Nabutaka Village, giving every child the chance to reach their full potential. With the unwavering support of my husband and community, we've created a place where education transforms lives.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FCC953] rounded-3xl opacity-20 blur-2xl"></div>
              <img
                src="/IMG/fou.jpg"
                alt="Founder - Sarah Muwonge"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
