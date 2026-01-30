'use client';

const AdmissionsProcess = () => {
    const steps = [
        {
            number: 1,
            title: 'Request Information',
            description: 'Contact our admissions office to request information about available classes and programs.',
            action: 'info@kutyamukama.org',
        },
        {
            number: 2,
            title: 'Submit Application',
            description: 'Complete and submit the application form along with required documents and registration fee.',
            action: '+256 700 000 000',
        },
        {
            number: 3,
            title: 'Assessment & Interview',
            description: 'Child attends assessment test and parents have consultation with school administration.',
            action: 'Schedule online',
        },
        {
            number: 4,
            title: 'Admission Letter',
            description: 'Receive admission confirmation letter with enrollment details and next steps.',
            action: 'Instant notification',
        },
        {
            number: 5,
            title: 'Uniform & Materials',
            description: 'Collect school uniforms, books, and learning materials from our resource center.',
            action: 'One week before',
        },
        {
            number: 6,
            title: 'School Start',
            description: 'Student officially starts school with orientation and settling-in program.',
            action: 'First day',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Admissions Process</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Simple, transparent, and quick admission process to help your child join our school community.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {steps.map((step, idx) => (
                        <div key={step.number} className="relative">
                            {/* Connection Line */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block absolute -right-4 top-12 w-8 h-1 bg-gradient-to-r from-brand-red to-transparent"></div>
                            )}

                            {/* Card */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border-t-4 border-brand-red">
                                {/* Step Number */}
                                <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                    {step.number}
                                </div>

                                <h3 className="text-xl font-bold text-brand-blue mt-4 mb-3">{step.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm font-semibold text-brand-red">{step.action}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Requirements Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-2xl border-l-4 border-brand-blue">
                        <h3 className="text-2xl font-bold text-brand-blue mb-6">📋 Required Documents</h3>
                        <ul className="space-y-3">
                            {[
                                'Birth Certificate (original & copy)',
                                'Immunization Record/Health Certificate',
                                'Previous School Report/Transcript',
                                'Parent/Guardian ID Copy',
                                'Passport-sized photograph (4)',
                                'Application Form (completed)',
                                'Medical examination report',
                            ].map((doc, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <svg className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">{doc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-2xl border-l-4 border-green-500">
                        <h3 className="text-2xl font-bold text-brand-blue mb-6">✨ What Sets Us Apart</h3>
                        <ul className="space-y-3">
                            {[
                                'No entrance exam fees',
                                'Quick 2-3 day processing',
                                'Flexible enrollment throughout year',
                                'Transparent grading & reporting',
                                'Parent orientation provided',
                                'Trial period available',
                                'Money-back guarantee if not satisfied',
                            ].map((feature, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 bg-brand-red text-white p-12 rounded-3xl text-center">
                    <h3 className="text-3xl font-bold mb-4">Ready to Enroll Your Child?</h3>
                    <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                        Contact our friendly admissions team today. They're ready to answer all your questions!
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="/register"
                            className="btn bg-white hover:bg-gray-100 text-brand-red font-bold text-lg px-8 py-3 rounded-lg"
                        >
                            Start Application
                        </a>
                        <a
                            href="tel:+256700000000"
                            className="btn bg-white/20 hover:bg-white/30 border-2 border-white text-white font-bold text-lg px-8 py-3 rounded-lg"
                        >
                            Call Us Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// export default AdmissionsProcess;
export { AdmissionsProcess };
