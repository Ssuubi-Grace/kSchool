'use client';

const ContactSection = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0A0350] mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="font-bold text-[#0A0350] text-3xl mb-6">Send Us a Message</h3>
            <p className="text-gray-600 mb-8">
              <i className="fas fa-envelope text-red-500 mr-2"></i>
              <a href="mailto:kutyamukamanurseryandprimarysc@gmail.com" className="text-[#0A0350] hover:text-red-500 transition-colors">
                kutyamukamanurseryandprimarysc@gmail.com
              </a>
            </p>

            <form
              id="contactForm"
              method="post"
              action="https://api.web3forms.com/submit"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="5cddf98c-469f-4d6d-accd-ee16d05c56d6"
              />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="John Doe"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#0A0350] focus:bg-white focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#0A0350] focus:bg-white focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+256 XXX XXX XXX"
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#0A0350] focus:bg-white focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us how we can help..."
                  required
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#0A0350] focus:bg-white focus:outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0A0350] text-white py-4 px-8 rounded-xl text-lg font-bold hover:bg-[#1b163f] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-paper-plane mr-3"></i>Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d83677.63798236546!2d32.56618296812144!3d0.49285622778358146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x177c4bdb92f9b197%3A0x9fba89992fd4c08e!2sGayaza%20-%20Zirobwe%20Road!3m2!1d0.5734871!2d32.646922599999996!4m5!1s0x177db314f432753d%3A0x6eb42ab938d25afd!2sGitta%20Trading%20Centre%2C%20FH6Q%2BRPR%2C%20Nangabo%20-%20Mekenke%20Road%2C%20Greenfield%20Rd%2C%20Greenfield%20Rd%2C%20Kampala!3m2!1d0.45960829999999997!2d32.5868484!5e0!3m2!1sen!2sug!4v1721330868411!5m2!1sen!2sug"
              width="100%"
              height="580"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title="Kutya Mukama Kids Foundation Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
