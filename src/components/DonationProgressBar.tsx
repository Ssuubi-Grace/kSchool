'use client';

const DonationProgressBar = () => {
  const target = 50000;
  const raised = 28500;
  const percentage = (raised / target) * 100;
  const donors = 342;

  return (
    <section className="py-16 bg-gradient-to-r from-brand-blue to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Help Us Reach Our Goal</h2>
          <p className="text-blue-100">Every donation helps us provide better education and care for our children</p>
        </div>

        <div className="bg-white bg-opacity-20 rounded-lg p-8 backdrop-blur-sm">
          <div className="grid grid-cols-3 gap-4 mb-8 text-center">
            <div>
              <p className="text-3xl font-bold">${raised.toLocaleString()}</p>
              <p className="text-blue-100 text-sm">Raised</p>
            </div>
            <div>
              <p className="text-3xl font-bold">${target.toLocaleString()}</p>
              <p className="text-blue-100 text-sm">Target</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{donors}</p>
              <p className="text-blue-100 text-sm">Donors</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="w-full bg-white bg-opacity-30 rounded-full h-6 overflow-hidden">
              <div
                className="bg-yellow-400 h-full rounded-full transition-all duration-500 flex items-center justify-center"
                style={{ width: `${percentage}%` }}
              >
                {percentage > 10 && <span className="text-xs font-bold text-brand-blue">{Math.round(percentage)}%</span>}
              </div>
            </div>
            <p className="text-right text-sm text-blue-100 mt-2">{Math.round(percentage)}% funded</p>
          </div>

          <div className="text-center">
            <a
              href="#donate"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-brand-blue font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationProgressBar;
