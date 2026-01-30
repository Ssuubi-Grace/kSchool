import Image from 'next/image';

export default function Faculty() {
    const faculty = [
        {
            name: 'Mrs. Sarah Muwonge',
            role: 'Founder & Head Teacher',
            image: '/IMG/founder.jpg',
            description: 'With over 39 years of experience in education, Mrs. Muwonge leads our school with passion and dedication.'
        },
        {
            name: 'Mr. Christopher Muwonge',
            role: 'Co-Founder & Administrator',
            image: '/IMG/dir.jpg',
            description: 'A visionary leader who supports the school\'s growth and ensures smooth operations.'
        },
        {
            name: 'Ms. Head Teacher',
            role: 'Deputy Head Teacher',
            image: '/IMG/Head Teacher2.JPG',
            description: 'Experienced educator committed to student success and academic excellence.'
        },
        {
            name: 'Teacher 1',
            role: 'Primary Teacher',
            image: '/IMG/uncle.jpg',
            description: 'Dedicated to nurturing young minds and fostering a love for learning.'
        },
        {
            name: 'Teacher 2',
            role: 'Nursery Teacher',
            image: '/IMG/kiganda.jpeg',
            description: 'Specializes in early childhood education and development.'
        },
        {
            name: 'Teacher 3',
            role: 'Sports Coach',
            image: '/IMG/portbell.JPG',
            description: 'Promotes physical fitness and teamwork through various sports activities.'
        }
    ];

    return (
        <div>
            <h1 className="text-4xl font-bold text-brand-blue pt-8 text-center mt-[100px]">
                OUR FACULTY
            </h1>

            <section className="container mx-auto px-4 py-8">
                <p className="text-lg text-center mb-12 text-gray-700">
                    Meet our dedicated team of educators who are committed to providing quality education and nurturing the potential of every student.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {faculty.map((member, index) => (
                        <div key={index} className="faculty-card bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={300}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-blue mb-2">{member.name}</h3>
                                <p className="text-brand-red font-semibold mb-3">{member.role}</p>
                                <p className="text-gray-600">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold text-brand-blue mb-4 text-center">Our Teaching Philosophy</h2>
                    <p className="text-gray-700 text-center max-w-4xl mx-auto">
                        At Kutya Mukama Nursery and Primary School, our faculty believes in creating a supportive and engaging learning environment.
                        We employ modern teaching methodologies combined with traditional values to ensure holistic development of our students.
                        Our teachers are continuously trained and updated with the latest educational practices to provide the best possible education.
                    </p>
                </div>
            </section>
        </div>
    );
}