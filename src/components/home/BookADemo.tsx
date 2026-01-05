import React from 'react';
import { FaMobileAlt, FaGlobe } from "react-icons/fa";
import { Globe, Check } from "lucide-react";
import BookDemoForm from './BookDemoForm';

const BookADemo = () => {
    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

                    {/* Left Content */}
                    <div className="lg:sticky lg:top-24 space-y-6 lg:max-w-2xl">

                        <div className=" inline-block rounded-full bg-prime-background/10 px-4 py-1.5 font-semibold text-xs tracking-wider uppercase">
                            <span className='bg-brand-gradient bg-clip-text text-transparent font-bold'>
                                Book A Demo
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-900 leading-snug">
                                Experience the Power of Skilldeck Yourself
                            </h2>
                            <p className="text-sm md:text-base text-gray-600 md:leading-7">
                                Get a personalized walkthrough of the platform and see how we can transform your training business.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row lg:flex-col gap-8">
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-xl bg-prime-background/10 flex items-center justify-center text-prime-blue text-2xl">
                                    <FaMobileAlt />
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-bold text-gray-900">Virtual Walkthrough</h3>
                                    <p className="text-gray-600 text-sm">30-minute interactive session with our experts.</p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-xl bg-prime-background/10 flex items-center justify-center text-prime-blue text-2xl">
                                    <Globe />
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-bold text-gray-900">On-Premise Presentation</h3>
                                    <p className="text-gray-600 text-sm">Available for established training companies.</p>
                                </div>
                            </div>
                        </div>

                        {/* What You'll Get Card */}
                        <div className=" bg-brand-gradient rounded-2xl p-5 text-white shadow-xl">
                            <h3 className="text-xl font-bold mb-2">What You'll Get</h3>
                            <ul className="space-y-2">
                                {[
                                    'One-time session password (24-hour access)',
                                    'Full platform walkthrough',
                                    'Personalized use case discussion',
                                    'Pricing and implementation guidance',
                                    'Q&A with product experts'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg- flex items-center justify-center">
                                            <Check className="w-3 h-3 text-brand-gradient" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-300 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white max-w-3xl w-full rounded-3xl md:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-gray-100 lg:p-6 xl:p-10 ">
                        <BookDemoForm />
                    </div>

                </div>
            </div>
        </section>
    );
};


export default BookADemo