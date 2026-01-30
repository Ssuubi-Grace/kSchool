'use client';

const FeeStructure = () => {
  const fees = [
    {
      class: 'Nursery (Age 2-4)',
      dayFee: '250,000',
      boardingFee: '500,000',
      description: 'Includes meals, uniforms, and co-curricular activities',
    },
    {
      class: 'Kindergarten (Age 4-5)',
      dayFee: '300,000',
      boardingFee: '550,000',
      description: 'Includes meals, uniforms, and co-curricular activities',
    },
    {
      class: 'Primary 1-3 (Age 5-8)',
      dayFee: '350,000',
      boardingFee: '600,000',
      description: 'Includes meals, uniforms, books, and co-curricular activities',
    },
    {
      class: 'Primary 4-7 (Age 8-13)',
      dayFee: '400,000',
      boardingFee: '650,000',
      description: 'Includes meals, uniforms, books, and co-curricular activities',
    },
  ];

  const additionalServices = [
    { service: 'School Transport', fee: '50,000 - 100,000', period: 'Per Month' },
    { service: 'Swimming Classes', fee: '30,000', period: 'Per Month' },
    { service: 'Sports Academy', fee: '40,000', period: 'Per Month' },
    { service: 'Music Lessons', fee: '35,000', period: 'Per Month' },
    { service: 'Coding Classes', fee: '50,000', period: 'Per Month' },
    { service: 'Exam Preparation', fee: '25,000', period: 'Per Month' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Fees Structure</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Affordable, transparent pricing with excellent value for quality education and facilities.
          </p>
        </div>

        {/* Main Fees Table */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white">
                <th className="px-6 py-4 text-left font-bold">Class/Level</th>
                <th className="px-6 py-4 text-center font-bold">Day Pupil (UGX)</th>
                <th className="px-6 py-4 text-center font-bold">Boarding (UGX)</th>
                <th className="px-6 py-4 text-left font-bold">Includes</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee, idx) => (
                <tr
                  key={idx}
                  className={`border-b ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-800">{fee.class}</td>
                  <td className="px-6 py-4 text-center text-lg font-bold text-brand-red">{fee.dayFee}</td>
                  <td className="px-6 py-4 text-center text-lg font-bold text-brand-blue">{fee.boardingFee}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{fee.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand-blue mb-8">Optional Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border-l-4 border-brand-red">
                <h4 className="font-bold text-brand-blue text-lg mb-2">{item.service}</h4>
                <div className="text-2xl font-bold text-brand-red mb-1">{item.fee}</div>
                <p className="text-sm text-gray-600">{item.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Terms & Discount Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-brand-blue mb-4">💳 Payment Terms</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Fees due by the 15th of each month</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Monthly, term, or annual payment options available</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Bank transfers, mobile money, or cash payments accepted</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>10% discount for annual payment in advance</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-brand-blue">
            <h3 className="text-xl font-bold text-brand-blue mb-4">🎁 Financial Assistance</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-brand-blue font-bold">✓</span>
                <span>Sibling discounts available</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-blue font-bold">✓</span>
                <span>Scholarships for exceptional students</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-blue font-bold">✓</span>
                <span>Financial hardship support programs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-blue font-bold">✓</span>
                <span>Flexible payment plans available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Enrollment Fee Note */}
        <div className="mt-12 bg-brand-red/10 border-l-4 border-brand-red p-6 rounded-lg">
          <p className="text-gray-800">
            <span className="font-bold text-brand-red">Note:</span> A one-time enrollment/registration fee of 100,000 UGX applies to new students. 
            This covers admission processing, school materials, and uniform fitting.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Have questions about fees? Get in touch with our admissions team!</p>
          <a
            href="/contact"
            className="btn bg-brand-red hover:bg-red-700 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg transition-all"
          >
            Contact Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;
