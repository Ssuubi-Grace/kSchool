import Image from 'next/image';

export default function Curriculum() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-brand-blue pt-8 text-center mt-[100px]">
                OUR CURRICULUM
            </h1>

            {/* Background */}
            <section className="container mx-auto px-4 py-8">
                {/* School Sections */}
                <h2 className="text-2xl md:text-3xl text-brand-blue font-bold text-center mb-4 mt-8 md:mb-12">
                    OUR SCHOOL SECTIONS
                </h2>

                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4">
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                        <div className="p-6">
                            <div className="text-center mb-4">
                                <Image
                                    src="/IMG/nur_pic-removebg-preview.png"
                                    alt="Nursery"
                                    width={120}
                                    height={120}
                                    className="mx-auto"
                                />
                            </div>
                            <h4 className="text-2xl text-brand-blue font-bold mb-4 text-center">
                                Nursery
                            </h4>
                            <p className="text-gray-700 text-center text-lg leading-relaxed">
                                This is the early childhood section for children aged 3-6 years. It comprises of classes Baby class, Middle class, and Top class from which they graduate to the next section.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 delay-100">
                        <div className="p-6">
                            <div className="text-center mb-4">
                                <Image
                                    src="/IMG/inf-removebg-preview.png"
                                    alt="Lower Primary"
                                    width={120}
                                    height={120}
                                    className="mx-auto"
                                />
                            </div>
                            <h4 className="text-2xl text-brand-blue font-bold mb-4 text-center">
                                Lower-Primary
                            </h4>
                            <p className="text-gray-700 text-center text-lg leading-relaxed">
                                After graduating successfully from Top class, pupils join the primary section. The lower primary or infant section comprises of Primary One, Primary Two, and Primary Three classes.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 delay-200">
                        <div className="p-6">
                            <div className="text-center mb-4">
                                <Image
                                    src="/IMG/fant2-removebg-preview.png"
                                    alt="Upper Primary"
                                    width={120}
                                    height={120}
                                    className="mx-auto"
                                />
                            </div>
                            <h4 className="text-2xl text-brand-blue font-bold mb-4 text-center">
                                Upper Primary
                            </h4>
                            <p className="text-gray-700 text-center text-lg leading-relaxed">
                                This comprises of Primary Four, Primary Five, Primary Six, and the candidate Class Primary Seven in which they sit for Primary Leaving Exams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}