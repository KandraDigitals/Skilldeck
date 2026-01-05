import React, { useRef, useState } from 'react';
import {
    Globe,
    GraduationCap,
    Users,
    Sparkles,
    MessageSquare,
    Video,
    Calendar,
    UserCog,
    ShoppingCart,
    Mail,
    Share2,
    Briefcase,
    Search,
    Upload,
    Database,
    Check,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const features = [
    {
        icon: Globe,
        title: "Website & CMS",
        description: "SEO-optimized, performance-focused, world-class themes",
        points: ["Custom domains", "Blog engine", "Landing pages"],
        moreCount: 1,
        gradient: "from-blue-400 to-blue-600",
        checkColor: "text-blue-500",
        checkBgColor: "bg-blue-500"
    },
    {
        icon: GraduationCap,
        title: "LMS",
        description: "Courses, batches, quizzes, practice tests, certifications",
        points: ["Course builder", "Quizzes & exams", "Certificates"],
        moreCount: 1,
        gradient: "from-indigo-400 to-indigo-600",
        checkColor: "text-indigo-500",
        checkBgColor: "bg-indigo-500"
    },
    {
        icon: Users,
        title: "CRM",
        description: "Lead tracking, sales automation, follow-ups",
        points: ["Lead capture", "Pipeline management", "Follow-up automation"],
        moreCount: 1,
        gradient: "from-cyan-400 to-cyan-600",
        checkColor: "text-cyan-500",
        checkBgColor: "bg-cyan-500"
    },
    {
        icon: Sparkles,
        title: "AI + Automation",
        description: "Reduce manual work across departments",
        points: ["AI chat support", "Smart workflows", "Auto-reminders"],
        moreCount: 1,
        gradient: "from-violet-400 to-violet-600",
        checkColor: "text-violet-500",
        checkBgColor: "bg-violet-500"
    },
    {
        icon: MessageSquare,
        title: "Webchat",
        description: "Convert visitors into leads instantly",
        points: ["Live chat widget", "Lead capture", "Auto responses"],
        moreCount: 1,
        gradient: "from-emerald-400 to-emerald-600",
        checkColor: "text-emerald-500",
        checkBgColor: "bg-emerald-500"
    },
    {
        icon: Video,
        title: "Events & Webinar Management",
        description: "Global time zones & currencies",
        points: ["Webinar hosting", "Event scheduling", "Ticket sales"],
        moreCount: 1,
        gradient: "from-sky-400 to-sky-600",
        checkColor: "text-sky-500",
        checkBgColor: "bg-sky-500"
    },
    {
        icon: Calendar,
        title: "Class & Batch Management",
        description: "Fully automated workflows",
        points: ["Batch scheduling", "Attendance tracking", "Progress reports"],
        moreCount: 1,
        gradient: "from-orange-400 to-orange-600",
        checkColor: "text-orange-500",
        checkBgColor: "bg-orange-500"
    },
    {
        icon: UserCog,
        title: "Trainer Management",
        description: "Allocation, scheduling & tracking",
        points: ["Trainer profiles", "Schedule management", "Payroll tracking"],
        moreCount: 1,
        gradient: "from-purple-400 to-purple-600",
        checkColor: "text-purple-500",
        checkBgColor: "bg-purple-500"
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Module",
        description: "Sell digital & physical products",
        points: ["Multi-gateway", "Invoicing", "Subscriptions"],
        moreCount: 1,
        gradient: "from-teal-400 to-teal-600",
        checkColor: "text-teal-500",
        checkBgColor: "bg-teal-500"
    },
    {
        icon: Mail,
        title: "Marketing Automation",
        description: "Campaigns, email, workflows",
        points: ["Email marketing", "WhatsApp campaigns", "Drip sequences"],
        moreCount: 1,
        gradient: "from-rose-400 to-rose-600",
        checkColor: "text-rose-500",
        checkBgColor: "bg-rose-500"
    },
    {
        icon: Share2,
        title: "Social Media Publishing",
        description: "From the same dashboard",
        points: ["Multi-platform posting", "Content calendar", "Analytics"],
        moreCount: 1,
        gradient: "from-pink-400 to-pink-600",
        checkColor: "text-pink-500",
        checkBgColor: "bg-pink-500"
    },
    {
        icon: Briefcase,
        title: "Job Portal",
        description: "Career opportunities for learners",
        points: ["Job listings", "Recruiter access", "Resume builder"],
        moreCount: 1,
        gradient: "from-slate-400 to-slate-600",
        checkColor: "text-slate-500",
        checkBgColor: "bg-slate-500"
    },
    {
        icon: Search,
        title: "SEO Automation",
        description: "Region-wise SEO pages at scale",
        points: ["Meta optimization", "Sitemap generation", "Schema markup"],
        moreCount: 1,
        gradient: "from-amber-400 to-amber-600",
        checkColor: "text-amber-500",
        checkBgColor: "bg-amber-500"
    },
    {
        icon: Upload,
        title: "Bulk Upload Tools",
        description: "Save hundreds of man-hours",
        points: ["CSV imports", "Batch processing", "Data validation"],
        moreCount: 1,
        gradient: "from-lime-400 to-lime-600",
        checkColor: "text-lime-500",
        checkBgColor: "bg-lime-500"
    },
    {
        icon: Database,
        title: "All Data in One Place",
        description: "Complete visibility & control",
        points: ["Real-time dashboard", "Custom reports", "Revenue analytics"],
        moreCount: 1,
        gradient: "from-fuchsia-400 to-fuchsia-600",
        checkColor: "text-fuchsia-500",
        checkBgColor: "bg-fuchsia-500"
    }
];

// Feature Card Component
const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
    <div
        className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-[280px] sm:w-auto"
    >
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <feature.icon className="w-6 h-6 text-white" />
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-base mb-2">
            {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {feature.description}
        </p>

        {/* Feature Points */}
        <ul className="space-y-2 mb-2">
            {feature.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-center gap-2">
                    <div className={`rounded-full p-0.5 ${feature.checkBgColor}`}>
                        <Check className="w-3 h-3 flex-shrink-0 text-white" />
                    </div>
                    <span className="text-gray-600 text-xs">{point}</span>
                </li>
            ))}
        </ul>

        <span className={`text-xs font-medium ${feature.checkColor}`}>& more</span>
    </div>
);

const WhatYouGet = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="pb-12 pt-6 md:py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-14">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-6">
                        <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                            Features
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What You Get with,{' '}
                        <span className="bg-brand-gradient bg-clip-text text-transparent">
                            Skilldeck
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Skilldeck replaces your entire tech stack with one powerful platform. No more juggling tools—everything works together seamlessly.
                    </p>
                </div>

                {/* Mobile Swipe View */}
                <div className="sm:hidden">
                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {features.map((feature, index) => (
                            <div key={index} className="snap-start">
                                <FeatureCard feature={feature} index={index} />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls - Arrows + Dots */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                        {/* Left Arrow */}
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center border transition-all ${canScrollLeft
                                ? 'bg-white border-gray-200 hover:bg-gray-50 text-gray-700'
                                : 'bg-gray-100 border-gray-100 text-gray-300 cursor-not-allowed'
                                }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Scroll Indicator Dots */}
                        <div className="flex gap-1.5">
                            {Array.from({ length: Math.ceil(features.length / 3) }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-gray-300"
                                />
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center border transition-all ${canScrollRight
                                ? 'bg-white border-gray-200 hover:bg-gray-50 text-gray-700'
                                : 'bg-gray-100 border-gray-100 text-gray-300 cursor-not-allowed'
                                }`}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Desktop/Tablet Grid View */}
                <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;
