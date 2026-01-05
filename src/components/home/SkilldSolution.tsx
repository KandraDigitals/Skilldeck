import React from 'react';
import Image from 'next/image';
import { Check, X, Sparkles, CheckCircle2, ChartColumn } from 'lucide-react';
import skilldeckLogo from '../../../public/logos/mainlogo.svg'
import withoutSkilldeckImage from '../../../public/figma-designs/withandwithout.png'

const withoutSkilldeck = [
    "10+ different software subscriptions",
    "Large team to manage operations",
    "High development costs",
    "Constant maintenance issues",
    "Disconnected data & workflows",
    "Thin or negative margins"
];

const withSkilldeck = [
    "One unified platform",
    "Lean team (5-10% of typical size)",
    "Zero development costs",
    "No maintenance headaches",
    "All data in one place",
    "Healthy, sustainable margins"
];

const SkilldSolution = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-14">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-6">
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            The Skilldeck Solution
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                        Everything You Need.
                    </h2>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-ai-color bg-clip-text text-transparent">
                            One Dashboard. One Cost.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                        Skilldeck eliminates up to <span className="font-bold text-gray-900">90% of unnecessary expenses</span> by replacing multiple tools, teams, and manual processes with a single, powerful, AI-enabled platform.
                    </p>
                </div>

                {/* Blue Banner */}
                <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-3xl p-6 md:p-10 mb-10 md:mb-14">
                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                            Just one system that runs your entire training business end-to-end.
                        </h3>
                        <p className="text-blue-100 text-sm md:text-base mb-6">
                            From website to LMS, CRM to marketing, payments to analytics.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            <div className="bg-white backdrop-blur-sm border border-white/20 rounded-md px-4 md:px-6 py-2 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" />
                                <span className="text-black text-sm md:text-base font-medium">No juggling tools.</span>
                            </div>
                            <div className="bg-white backdrop-blur-sm border border-white/20 rounded-md px-4 md:px-6 py-2 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" />
                                <span className="text-black text-sm md:text-base font-medium">No heavy tech investments.</span>
                            </div>
                            <div className="bg-white backdrop-blur-sm border border-white/20 rounded-md px-4 md:px-6 py-2 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-300" />
                                <span className="text-black text-sm md:text-base font-medium">No operational nightmares.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 md:gap-0">
                    {/* Without Skilldeck Card */}
                    <div className="col-span-2 bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm md:mr-10">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            {/* Image Placeholder */}
                            <div className="w-full md:w-2/5 flex-shrink-0">
                                <Image src={withoutSkilldeckImage} alt="Without Skilldeck" width={500} height={500} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 w-full">
                                <div className="space-y-6 mb-5">
                                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                                        <ChartColumn className="text-white font-bold text-sm" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-gray-900">Without Skilldeck</h4>
                                </div>

                                <ul className="space-y-3">
                                    {withoutSkilldeck.map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                                                <X className="w-3 h-3 text-red-500" />
                                            </div>
                                            <span className="text-gray-600 text-sm md:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* With Skilldeck Card */}
                    <div className="bg-brand-gradient rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden ">
                        <div className="space-y-6 mb-5">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex items-center gap-2">
                                <h4 className="text-xl md:text-2xl font-bold text-white">With </h4>
                                <div className="bg-white py-1 px-3 rounded-full">
                                    <Image src={skilldeckLogo} alt="Skilldeck" width={100} height={100} />
                                </div>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            {withSkilldeck.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 text-brand-gradient" />
                                    </div>
                                    <span className="text-white/90 text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden md:block bg-brand-gradient h-40 w-40 rounded-full absolute -right-12 -top-12"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SkilldSolution;
