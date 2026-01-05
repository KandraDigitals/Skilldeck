import React from 'react';
import Image from 'next/image';
import { BadgeDollarSign } from 'lucide-react';
import youEndUpPayingImage from '../../../public/figma-designs/Youenduppaying.png';
import lostRevenueImage from '../../../public/figma-designs/youenduppaying/lostrevenue.png'
import risingCostsImage from '../../../public/figma-designs/youenduppaying/risingcosts.png'
import wastedBudgetImage from '../../../public/figma-designs/youenduppaying/wastedbudget.png'

const payingItems = [
    "Multiple software subscriptions",
    "Large teams to manage simple tasks",
    "Agencies to build & maintain systems",
    "Continuous development & maintenance"
];

const PayingFor = () => {
    return (
        <section className="py-12 md:py-16 ">
            <div className="container mx-auto md:px-6">
                <div className="bg-[#EEEDF2] md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Right Side - Bento Grid */}
                        <div className="w-full lg:w-4/12">
                            <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-[280px] md:h-[320px]">
                                {/* Wasted Budget - Top Left */}
                                <div className="relative rounded-2xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow">
                                    <Image
                                        src={wastedBudgetImage}
                                        alt="Wasted Budget"
                                        fill
                                        className="group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <div className="absolute bottom-3 left-3">
                                        <p className="text-sm font-semibold text-white">Wasted Budget</p>
                                    </div>
                                </div>

                                {/* Rising Costs - Top Right (spans 2 rows) */}
                                <div className="relative rounded-2xl overflow-hidden shadow-md row-span-2 group hover:shadow-lg transition-shadow">
                                    <Image
                                        src={risingCostsImage}
                                        alt="Rising Costs"
                                        fill
                                        className="group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 via-pink-500/40 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-base font-bold text-white">Rising Costs</p>
                                        <p className="text-xs text-white/80 mt-1">Month over month</p>
                                    </div>
                                </div>

                                {/* Lost Revenue - Bottom Left */}
                                <div className="relative rounded-2xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow">
                                    <Image
                                        src={lostRevenueImage}
                                        alt="Lost Revenue"
                                        fill
                                        className="group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <div className="absolute bottom-3 left-3">
                                        <p className="text-sm font-semibold text-white">Lost Revenue</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Left Side - List */}
                        <div className="w-full lg:w-4/12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                                You end up paying for:
                            </h2>

                            <ul className="space-y-4 md:space-y-5">
                                {payingItems.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                                            <BadgeDollarSign className="w-6 h-6 text-white " />
                                        </div>
                                        <span className="text-gray-700 text-sm md:text-base font-medium">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Center - Illustration */}
                        <div className="w-full lg:w-4/12 flex flex-col items-center">
                            {/* Image */}
                            <div className="relative w-fit mb-4 border border-gray-200 bg-white lg:rounded-2xl p-4">
                                <Image
                                    src={youEndUpPayingImage}
                                    alt="Tech complexity illustration"
                                    width={350}
                                    height={350}
                                    className="object-contain"
                                />
                                {/* Disappointing Results Banner */}
                                <div className="w-fit bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full px-6 py-2.5 shadow-lg mx-auto">
                                    <p className="text-white text-sm md:text-base font-medium text-center lg:text-nowrap">
                                        And yet... results remain disappointing.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PayingFor;
