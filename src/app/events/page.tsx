import Image from 'next/image';

export default function Events() {
    const galleryImages = [
        '/IMG/Gal1.jpg', '/IMG/Gal2.jpg', '/IMG/gal3.jpg', '/IMG/gal4.jpg', '/IMG/gal5.jpg',
        '/IMG/gal6.jpg', '/IMG/gal7.jpg', '/IMG/gal8.jpg', '/IMG/gal9.jpg', '/IMG/gal10.JPG',
        '/IMG/gal11.JPG', '/IMG/gal12.JPG', '/IMG/Sports1.PNG', '/IMG/Sport1.JPG',
        '/IMG/sports2.PNG', '/IMG/sport.JPG', '/IMG/dance.png', '/IMG/Dance.JPG',
        '/IMG/black_dance.JPG', '/IMG/border1.JPG', '/IMG/border3.JPG', '/IMG/border2.JPG'
    ];

    const videos = [
        { src: '/VID/welcome_video.MOV', title: 'Welcome to Kutya Mukama' },
        { src: '/VID/afric_kids.mp4', title: 'African Kids Activities' },
        { src: '/VID/baby.mp4', title: 'Nursery Activities' },
        { src: '/VID/kids_run.mp4', title: 'Sports Day Highlights' }
    ];

    return (
        <div>
            <h1 className="text-4xl font-bold text-brand-blue pt-8 text-center mt-[100px]">
                EVENTS & GALLERY
            </h1>

            <section className="container mx-auto px-4 py-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Our Recent Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="event-card bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/IMG/sport.JPG"
                                alt="Sports Day"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-blue mb-2">Annual Sports Day</h3>
                                <p className="text-gray-600 mb-4">
                                    Our annual sports day brings together students, teachers, and parents for a day of fun, competition, and teamwork.
                                </p>
                                <p className="text-sm text-gray-500">Held annually in November</p>
                            </div>
                        </div>

                        <div className="event-card bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/IMG/Dance.JPG"
                                alt="Cultural Festival"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-blue mb-2">Cultural Festival</h3>
                                <p className="text-gray-600 mb-4">
                                    Celebrating diversity through music, dance, and traditional performances from our rich cultural heritage.
                                </p>
                                <p className="text-sm text-gray-500">Held quarterly</p>
                            </div>
                        </div>

                        <div className="event-card bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/IMG/upper_tour.jpg"
                                alt="Educational Tours"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-blue mb-2">Educational Tours</h3>
                                <p className="text-gray-600 mb-4">
                                    Field trips and educational excursions to museums, zoos, and historical sites to enhance learning.
                                </p>
                                <p className="text-sm text-gray-500">Throughout the year</p>
                            </div>
                        </div>

                        <div className="event-card bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/IMG/Volley.JPG"
                                alt="Concerts"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-blue mb-2">School Concerts</h3>
                                <p className="text-gray-600 mb-4">
                                    Musical performances and concerts showcasing the talents of our students in singing and instrumental music.
                                </p>
                                <p className="text-sm text-gray-500">Held biannually</p>
                            </div>
                        </div>

                        <div className="event-card bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/IMG/Sports1.PNG"
                                alt="Science Fair"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-blue mb-2">Science Fair</h3>
                                <p className="text-gray-600 mb-4">
                                    Students present innovative projects and experiments, fostering creativity and scientific thinking.
                                </p>
                                <p className="text-sm text-gray-500">Held annually in March</p>
                            </div>
                        </div>

                        <div className="event-card bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/IMG/border1.JPG"
                                alt="Parent-Teacher Meetings"
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-blue mb-2">Parent-Teacher Meetings</h3>
                                <p className="text-gray-600 mb-4">
                                    Regular meetings to discuss student progress and collaborate on their educational journey.
                                </p>
                                <p className="text-sm text-gray-500">Held termly</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Photo Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="gallery-item overflow-hidden rounded-lg shadow-md">
                                <Image
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Video Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {videos.map((video, index) => (
                            <div key={index} className="video-card bg-white rounded-lg shadow-lg overflow-hidden">
                                <video
                                    controls
                                    className="w-full h-64 object-cover"
                                    poster="/IMG/Gal1.jpg"
                                >
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-brand-blue">{video.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}