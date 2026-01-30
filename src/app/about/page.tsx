import Image from 'next/image';

export default function About() {
    return (
        <div>
            <h1 className="text-center font-bold text-brand-blue pt-8 text-4xl mt-[100px] mb-8">
                ABOUT US
            </h1>

            {/* Introduction Section */}
            <section className="relative">
                <div className="w-full h-96 relative">
                    <Image
                        src="/IMG/nursery.jpg"
                        alt="Our School"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
                        <p className="text-base md:text-xl text-white font-bold text-2xl">
                            Kutya Mukama Nursery and Primary School is a beacon of hope for children in Uganda. Driven by the belief that every child deserves quality education and a brighter future, we are committed to empowering young minds through holistic development. Our school strives to create a nurturing environment where children can learn, grow, and reach their full potential.
                        </p>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="p-4 text-black">
                    <h2 className="text-brand-blue font-bold text-xl mb-4">OUR HISTORY</h2>
                    <Image
                        src="/IMG/kidslogo-removebg-preview.png"
                        alt="School Logo"
                        width={200}
                        height={200}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="bg-brand-red p-4 text-white rounded-lg shadow-md text-xl">
                    Founded in 1985 by the visionary Mrs. Sarah Muwonge and Mr. Christopher Muwonge, Kutya Mukama Nursery and Primary School began as a humble effort to provide literacy skills to village children.
                    <br />
                    <br />
                    Starting with just 14 children under their own home, the founders' dedication quickly garnered attention. As word spread, more parents sought education for their children.
                    <br />
                    <br />
                    With unwavering support, the school expanded from nursery to primary levels. Despite challenges like limited resources and the COVID-19 pandemic, the school persevered.
                    <br />
                    <br />
                    Today, Kutya Mukama stands as a testament to community collaboration, offering a pathway to brighter futures for countless children.
                </div>
            </div>

            {/* Mission and Vision */}
            <section className="bg-gray-100 p-4 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front p-4">
                                <Image
                                    src="/IMG/missionw-removebg-preview.png"
                                    alt="Mission Icon"
                                    width={80}
                                    height={80}
                                    className="h-20 w-20 mb-2"
                                />
                                <p className="font-bold text-2xl text-brand-blue">OUR MISSION</p>
                            </div>
                            <div className="flip-card-back p-4">
                                <p className="font-medium text-lg text-brand-blue">
                                    Kutya Mukama Nursery and Primary School is dedicated to empowering children in underserved communities through quality education, holistic development, and community engagement, fostering a brighter future for all.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front p-4">
                                <Image
                                    src="/IMG/visionz-removebg-preview.png"
                                    alt="Vision Icon"
                                    width={80}
                                    height={80}
                                    className="h-20 w-20 mb-2"
                                />
                                <p className="font-bold text-2xl text-brand-blue">OUR VISION</p>
                            </div>
                            <div className="flip-card-back p-4">
                                <p className="font-medium text-lg text-brand-blue">
                                    To be a leading catalyst for transformative change in the lives of children, creating a society where every child has equal opportunities to reach their full potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives */}
            <section className="py-12 bg-gray-100">
                <h2 className="text-4xl font-bold text-center text-brand-blue mb-8">
                    OUR OBJECTIVES
                </h2>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="objective-item flex space-x-4 p-6 bg-white shadow-lg rounded-lg">
                            <div className="number text-3xl font-bold text-brand-blue">1</div>
                            <div>
                                <h3 className="text-2xl font-semibold text-brand-blue">
                                    Enhance Access to Quality Education
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Ensure that every child in underserved communities has access to high-quality education by providing necessary resources, infrastructure, and skilled educators.
                                </p>
                            </div>
                        </div>
                        <div className="objective-item flex space-x-4 p-6 bg-white shadow-lg rounded-lg">
                            <div className="number text-3xl font-bold text-brand-blue">2</div>
                            <div>
                                <h3 className="text-2xl font-semibold text-brand-blue">
                                    Promote Holistic Child Development
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Foster the overall development of children by offering programs that focus on academics, physical activities, life skills, and emotional well-being.
                                </p>
                            </div>
                        </div>
                        <div className="objective-item flex space-x-4 p-6 bg-white shadow-lg rounded-lg">
                            <div className="number text-3xl font-bold text-brand-blue">3</div>
                            <div>
                                <h3 className="text-2xl font-semibold text-brand-blue">
                                    Expand Educational Opportunities
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Work towards expanding the range of classes and facilities to accommodate more pupils, ensuring that all levels of primary education are available within the community.
                                </p>
                            </div>
                        </div>
                        <div className="objective-item flex space-x-4 p-6 bg-white shadow-lg rounded-lg">
                            <div className="number text-3xl font-bold text-brand-blue">4</div>
                            <div>
                                <h3 className="text-2xl font-semibold text-brand-blue">
                                    Support and Empower Educators
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Provide continuous training and development opportunities for teachers to enhance their skills and effectiveness in delivering quality education.
                                </p>
                            </div>
                        </div>
                        <div className="objective-item flex space-x-4 p-6 bg-white shadow-lg rounded-lg">
                            <div className="number text-3xl font-bold text-brand-blue">5</div>
                            <div>
                                <h3 className="text-2xl font-semibold text-brand-blue">
                                    Advocate for Child Rights and Protection
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Promote awareness and implement programs that safeguard children's rights, ensuring they learn in a safe and protective environment.
                                </p>
                            </div>
                        </div>
                        <div className="objective-item flex space-x-4 p-6 bg-white shadow-lg rounded-lg">
                            <div className="number text-3xl font-bold text-brand-blue">6</div>
                            <div>
                                <h3 className="text-2xl font-semibold text-brand-blue">
                                    Cultivate Creativity and Innovation
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Provide platforms for pupils to explore and develop their talents and creativity through diverse programs in arts, science, and technology.
                                </p>
                            </div>
                        </div>
                        <div className="objective-item flex space-x-4 p-6 bg-white shadow-lg rounded-lg">
                            <div className="number text-3xl font-bold text-brand-blue">7</div>
                            <div>
                                <h3 className="text-2xl font-semibold text-brand-blue">
                                    Promote Inclusivity and Diversity
                                </h3>
                                <p className="text-lg text-gray-600">
                                    Ensure that all children, regardless of background, have equal opportunities to succeed and are encouraged to celebrate their unique talents and cultural diversity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <h2 className="text-brand-blue text-center text-3xl font-bold mb-4 mt-8">
                OUR CORE VALUES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <div className="bg-brand-red p-4 text-white text-xl rounded-lg shadow-md transform hover:scale-105 transition duration-300 h-72 flex flex-col justify-center">
                    <div className="text-center">
                        <i className="fas fa-praying-hands text-white text-[50px] mb-4 mt-8"></i>
                        <h3 className="text-white font-bold text-2xl mb-4">Godliness</h3>
                        <p className="text-white text-lg">
                            We prioritize our relationship with God in all aspects of our work.
                        </p>
                    </div>
                </div>

                <div className="bg-brand-red p-4 text-white text-xl rounded-lg shadow-md transform hover:scale-105 transition duration-300 h-72 flex flex-col justify-center">
                    <div className="text-center">
                        <i className="fas fa-balance-scale text-white text-[50px] mb-4 mt-8"></i>
                        <h3 className="text-white font-bold text-2xl mb-4">Integrity</h3>
                        <p className="text-white text-lg">
                            We strive to be honest, ethical, and accountable in everything we do.
                        </p>
                    </div>
                </div>

                <div className="bg-brand-red p-4 text-white text-xl rounded-lg shadow-md transform hover:scale-105 transition duration-300 h-72 flex flex-col justify-center">
                    <div className="text-center">
                        <i className="fas fa-users text-white text-[50px] mb-4 mt-8"></i>
                        <h3 className="text-white font-bold text-2xl mb-4">
                            Inclusivity and Respect
                        </h3>
                        <p className="text-white text-lg">
                            We treat everyone with dignity and respect, valuing diversity and promoting an inclusive culture.
                        </p>
                    </div>
                </div>

                <div className="bg-brand-red p-4 text-white text-xl rounded-lg shadow-md transform hover:scale-105 transition duration-300 h-72 flex flex-col justify-center">
                    <div className="text-center">
                        <i className="fas fa-lightbulb text-white text-[50px] mb-4 mt-8"></i>
                        <h3 className="text-white font-bold text-2xl mb-4">Innovation</h3>
                        <p className="text-white text-lg">
                            We embrace creativity and innovation in our approach to education, continually seeking new and effective ways to enhance learning.
                        </p>
                    </div>
                </div>

                <div className="bg-brand-red p-4 text-white text-xl rounded-lg shadow-md transform hover:scale-105 transition duration-300 h-72 flex flex-col justify-center">
                    <div className="text-center">
                        <i className="fas fa-hands-helping text-white text-[50px] mb-4 mt-8"></i>
                        <h3 className="text-white font-bold text-2xl mb-4">
                            Collaboration
                        </h3>
                        <p className="text-white text-lg">
                            We believe in the power of teamwork and encourage collaboration across all levels of our organization.
                        </p>
                    </div>
                </div>

                <div className="bg-brand-red p-4 text-white text-xl rounded-lg shadow-md transform hover:scale-105 transition duration-300 h-72 flex flex-col justify-center">
                    <div className="text-center">
                        <i className="fas fa-heartbeat text-white text-[50px] mb-4 mt-8"></i>
                        <h3 className="text-white font-bold text-2xl mb-4">Resilience</h3>
                        <p className="text-white text-lg">
                            We are committed to nurturing resilience in our pupils, staff, and community.
                        </p>
                    </div>
                </div>

                <div className="bg-brand-red p-4 text-white text-xl rounded-lg shadow-md transform hover:scale-105 transition duration-300 h-72 flex flex-col justify-center">
                    <div className="text-center">
                        <i className="fas fa-medal text-white text-[50px] mb-4 mt-8"></i>
                        <h3 className="text-white font-bold text-2xl mb-4">Excellence</h3>
                        <p className="text-white text-lg">
                            We strive for the highest standards in everything we do, seeking continuous improvement.
                        </p>
                    </div>
                </div>

                <div className="bg-brand-red p-4 text-white text-xl rounded-lg shadow-md transform hover:scale-105 transition duration-300 h-72 flex flex-col justify-center">
                    <div className="text-center">
                        <i className="fas fa-tasks text-white text-[50px] mb-4 mt-8"></i>
                        <h3 className="text-white font-bold text-2xl mb-4">
                            Responsibility
                        </h3>
                        <p className="text-white text-lg">
                            We own our actions and fulfill our obligations with integrity and accountability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}