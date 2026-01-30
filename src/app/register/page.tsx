'use client';

import { useState } from 'react';

export default function Register() {
    const [formData, setFormData] = useState({
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        childName: '',
        childDOB: '',
        childClass: '',
        address: '',
        emergencyContact: '',
        medicalInfo: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        alert('Registration submitted successfully! We will contact you soon.');
    };

    return (
        <div>
            <h1 className="text-4xl font-bold text-brand-blue pt-8 text-center mt-[100px]">
                STUDENT REGISTRATION
            </h1>

            <section className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-brand-blue mb-6 text-center">
                            Register Your Child Today
                        </h2>

                        <div className="mb-8 p-6 bg-brand-yellow rounded-lg">
                            <h3 className="text-lg font-bold text-brand-blue mb-6 text-center">Registration Options</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                                    <div className="text-center">
                                        <div className="mb-4">
                                            <svg className="w-12 h-12 mx-auto text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-brand-blue mb-3 text-lg">Online Registration</h4>
                                        <p className="text-sm text-gray-700 mb-4">
                                            Fill out the form below to register your child digitally.
                                        </p>
                                        <button
                                            onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="bg-brand-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                                        >
                                            Fill Online Form
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                                    <div className="text-center">
                                        <div className="mb-4">
                                            <svg className="w-12 h-12 mx-auto text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-brand-blue mb-3 text-lg">Download Physical Form</h4>
                                        <p className="text-sm text-gray-700 mb-4">
                                            Download, print, and bring the registration form to school.
                                        </p>
                                        <a
                                            href="/VID/ssuubi-grace-279173.pdf" // Using existing PDF as placeholder
                                            download="registration-form.pdf"
                                            className="bg-brand-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300 inline-block"
                                        >
                                            Download PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form id="registration-form" onSubmit={handleSubmit} className="space-y-6">
                            <h3 className="text-xl font-bold text-brand-blue border-b pb-2">Parent/Guardian Information</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Parent/Guardian Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="parentEmail"
                                        value={formData.parentEmail}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="parentPhone"
                                        value={formData.parentPhone}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Emergency Contact
                                    </label>
                                    <input
                                        type="tel"
                                        name="emergencyContact"
                                        value={formData.emergencyContact}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Home Address *
                                </label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                ></textarea>
                            </div>

                            <h3 className="text-xl font-bold text-brand-blue border-b pb-2 pt-6">Child Information</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Child's Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="childName"
                                        value={formData.childName}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Date of Birth *
                                    </label>
                                    <input
                                        type="date"
                                        name="childDOB"
                                        value={formData.childDOB}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Desired Class *
                                </label>
                                <select
                                    name="childClass"
                                    value={formData.childClass}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                >
                                    <option value="">Select Class</option>
                                    <option value="baby">Baby Class (Nursery)</option>
                                    <option value="middle">Middle Class (Nursery)</option>
                                    <option value="top">Top Class (Nursery)</option>
                                    <option value="p1">Primary 1</option>
                                    <option value="p2">Primary 2</option>
                                    <option value="p3">Primary 3</option>
                                    <option value="p4">Primary 4</option>
                                    <option value="p5">Primary 5</option>
                                    <option value="p6">Primary 6</option>
                                    <option value="p7">Primary 7</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Medical Information/Allergies
                                </label>
                                <textarea
                                    name="medicalInfo"
                                    value={formData.medicalInfo}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Please provide any medical conditions, allergies, or special needs"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                ></textarea>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    required
                                    className="h-4 w-4 text-brand-blue focus:ring-brand-blue border-gray-300 rounded"
                                />
                                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                                    I agree to the terms and conditions and understand the school's policies. *
                                </label>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-brand-blue text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-lg"
                                >
                                    Submit Registration
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                            <h4 className="font-bold text-brand-blue mb-2">Next Steps</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• You will receive a confirmation email within 24 hours</li>
                                <li>• Our admissions team will contact you for an interview</li>
                                <li>• Bring original documents for verification</li>
                                <li>• School fees and uniform information will be provided</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}