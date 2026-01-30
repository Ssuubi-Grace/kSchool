'use client';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-brand-blue to-blue-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/IMG/Gal1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Kutya Mukama is ready to provide the right solution according to your needs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Contact Info */}
            <div className="bg-gray-50 p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>
              <p className="text-gray-600 mb-10">
                Kutya Mukama is here to provide quality education and support for your child's future.
              </p>

              {/* Head Office */}
              <div className="flex items-start mb-8">
                <div className="bg-blue-600 rounded-full p-4 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Head Office</h3>
                  <p className="text-gray-600">Gitta Nabutaka Village</p>
                  <p className="text-gray-600">Nangabo - Mekenke Road</p>
                  <p className="text-gray-600">Kampala, Uganda</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start mb-8">
                <div className="bg-blue-600 rounded-full p-4 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                  <a href="mailto:kutyamukamanurseryandprimarysc@gmail.com" className="text-blue-600 hover:underline break-all">
                    kutyamukamanurseryandprimarysc@gmail.com
                  </a>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start mb-10">
                <div className="bg-blue-600 rounded-full p-4 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">Phone: +256 XXX XXX XXX</p>
                  <p className="text-gray-600">Fax: +256 XXX XXX XXX</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow our social media</h3>
                <div className="flex gap-3">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-3 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-3 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>

              <form
                method="post"
                action="https://api.web3forms.com/submit"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="5cddf98c-469f-4d6d-accd-ee16d05c56d6"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d83677.63798236546!2d32.56618296812144!3d0.49285622778358146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x177c4bdb92f9b197%3A0x9fba89992fd4c08e!2sGayaza%20-%20Zirobwe%20Road!3m2!1d0.5734871!2d32.646922599999996!4m5!1s0x177db314f432753d%3A0x6eb42ab938d25afd!2sGitta%20Trading%20Centre%2C%20FH6Q%2BRPR%2C%20Nangabo%20-%20Mekenke%20Road%2C%20Greenfield%20Rd%2C%20Greenfield%20Rd%2C%20Kampala!3m2!1d0.45960829999999997!2d32.5868484!5e0!3m2!1sen!2sug!4v1721330868411!5m2!1sen!2sug"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}