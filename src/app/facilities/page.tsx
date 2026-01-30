import Image from 'next/image';

export default function Facilities() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-brand-blue pt-8 text-center mt-[100px]">
                OUR FACILITIES
            </h1>

            <section className="container mx-auto px-4 py-8">
                <p className="text-lg text-center mb-8 text-gray-700">
                    At Kutya Mukama Nursery and Primary School, we provide state-of-the-art facilities designed to create an optimal learning environment for our students.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Classroom */}
                    <div className="facility-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src="/IMG/newgood.jpg"
                            alt="Modern Classrooms"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-brand-blue mb-2">Modern Classrooms</h3>
                            <p className="text-gray-600">
                                Well-equipped classrooms with comfortable seating, interactive whiteboards, and ample natural light to enhance learning.
                            </p>
                        </div>
                    </div>

                    {/* Library */}
                    <div className="facility-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src="/IMG/news.jpg"
                            alt="School Library"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-brand-blue mb-2">School Library</h3>
                            <p className="text-gray-600">
                                A comprehensive library with books, educational materials, and digital resources to foster a love for reading and research.
                            </p>
                        </div>
                    </div>

                    {/* Playground */}
                    <div className="facility-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src="/IMG/sport.JPG"
                            alt="Playground"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-brand-blue mb-2">Sports Facilities</h3>
                            <p className="text-gray-600">
                                Safe and well-maintained playgrounds and sports fields for physical development and recreational activities.
                            </p>
                        </div>
                    </div>

                    {/* Computer Lab */}
                    <div className="facility-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src="/IMG/new1.jpg"
                            alt="Computer Lab"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-brand-blue mb-2">Computer Lab</h3>
                            <p className="text-gray-600">
                                Modern computer facilities with internet access and educational software to prepare students for the digital age.
                            </p>
                        </div>
                    </div>

                    {/* Science Lab */}
                    <div className="facility-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src="/IMG/prefs.jpg"
                            alt="Science Lab"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-brand-blue mb-2">Science Laboratory</h3>
                            <p className="text-gray-600">
                                Well-equipped science labs for hands-on experiments and practical learning in physics, chemistry, and biology.
                            </p>
                        </div>
                    </div>

                    {/* Dining Hall */}
                    <div className="facility-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src="/IMG/border1.JPG"
                            alt="Dining Hall"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-brand-blue mb-2">Dining Facilities</h3>
                            <p className="text-gray-600">
                                Clean and hygienic dining areas where students enjoy nutritious meals prepared with care.
                            </p>
                        </div>
                    </div>

                    {/* Art Room */}
                    <div className="facility-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src="/IMG/dance.png"
                            alt="Art Room"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-brand-blue mb-2">Art and Music Room</h3>
                            <p className="text-gray-600">
                                Creative spaces equipped with art supplies and musical instruments to nurture artistic talents.
                            </p>
                        </div>
                    </div>

                    {/* Medical Room */}
                    <div className="facility-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src="/IMG/Head Teacher2.JPG"
                            alt="Medical Room"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-brand-blue mb-2">Medical Facilities</h3>
                            <p className="text-gray-600">
                                On-site medical room with qualified staff to ensure the health and well-being of our students.
                            </p>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="facility-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src="/IMG/upper_tour.jpg"
                            alt="Security"
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-brand-blue mb-2">Security</h3>
                            <p className="text-gray-600">
                                24/7 security personnel and modern surveillance systems to ensure a safe learning environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}