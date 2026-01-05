import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitForm, setThankyou } from '@/Redux/slices/Forms/FormSlice';
import { User, Mail, Smartphone, Building2, Briefcase, Globe, MessageSquare } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    designation: string;
    website: string;
    message: string;
}

const BookDemoForm = () => {
    const dispatch = useDispatch<any>(); // accessing thunk dispatch

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        website: '',
        message: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [localStatus, setLocalStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors: Partial<FormData> = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLocalStatus('loading');

        try {
            const submissionData = {
                firstname: formData.name,
                email: formData.email,
                phone: formData.phone,
                company: formData.company,
                designation: formData.designation,
                website: formData.website,
                message: formData.message,
                curriculum: false,
                slug: window.location.pathname,
                page: window.location.pathname.split('/').filter(Boolean).pop() || 'homepage',
                formtype: 'demo-credentials',
                demo: true,
            };

            const resultAction = await dispatch(submitForm(submissionData));

            if (submitForm.fulfilled.match(resultAction)) {
                setLocalStatus('success');
                dispatch(setThankyou());
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    designation: '',
                    website: '',
                    message: ''
                });
            } else {
                setLocalStatus('error');
            }
        } catch (err) {
            console.error(err);
            setLocalStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-prime-dark ml-1">
                        <User className="w-4 h-4 text-prime-blue" />
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 text-sm lg:text-base py-2 md:py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-prime-blue'} focus:ring-0 focus:outline-none transition-colors bg-gray-50/50 focus:bg-white`}
                    />
                    {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-prime-dark ml-1">
                        <Mail className="w-4 h-4 text-prime-blue" />
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 text-sm lg:text-base py-2 md:py-3  rounded-xl border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-prime-blue'} focus:ring-0 focus:outline-none transition-colors bg-gray-50/50 focus:bg-white`}
                    />
                    {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-prime-dark ml-1">
                        <Smartphone className="w-4 h-4 text-prime-blue" />
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 text-sm lg:text-base py-2 md:py-3 rounded-xl border ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-prime-blue'} focus:ring-0 focus:outline-none transition-colors bg-gray-50/50 focus:bg-white`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs ml-1">{errors.phone}</p>}
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="company" className="flex items-center gap-2 text-sm font-semibold text-prime-dark ml-1">
                        <Building2 className="w-4 h-4 text-prime-blue" />
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 text-sm lg:text-base py-2 md:py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-0 focus:outline-none transition-colors bg-gray-50/50 focus:bg-white"
                    />
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                    <label htmlFor="designation" className="flex items-center gap-2 text-sm font-semibold text-prime-dark ml-1">
                        <Briefcase className="w-4 h-4 text-prime-blue" />
                        Designation
                    </label>
                    <input
                        type="text"
                        id="designation"
                        name="designation"
                        placeholder="Enter your designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full px-4 text-sm lg:text-base py-2 md:py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-0 focus:outline-none transition-colors bg-gray-50/50 focus:bg-white"
                    />
                </div>
                <div className="space-y-1.5">
                    <label htmlFor="website" className="flex items-center gap-2 text-sm font-semibold text-prime-dark ml-1">
                        <Globe className="w-4 h-4 text-prime-blue" />
                        Website URL
                    </label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        placeholder="Enter your website URL"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 text-sm lg:text-base py-2 md:py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-0 focus:outline-none transition-colors bg-gray-50/50 focus:bg-white"
                    />
                </div>
            </div>
            <div className="space-y-1.5">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-prime-dark ml-1">
                    <MessageSquare className="w-4 h-4 text-prime-blue" />
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 text-sm lg:text-base py-2 md:py-3 rounded-xl border border-gray-200 focus:border-prime-blue focus:ring-0 focus:outline-none transition-colors bg-gray-50/50 focus:bg-white resize-none"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={localStatus === 'loading'}
                className={`w-full py-2 md:py-3 px-6 rounded-full text-white font-bold text-base lg:text-lg shadow-[0_10px_20px_rgba(0,103,236,0.2)] transition-all transform hover:-translate-y-1 active:translate-y-0
                    ${localStatus === 'loading' ? 'bg-blue-400 cursor-not-allowed' : 'bg-brand-gradient hover:shadow-[0_15px_30px_rgba(0,103,236,0.3)]'}
                `}
            >
                {localStatus === 'loading' ? 'Sending...' : 'Request Demo Credentials'}
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
            </p>

            {localStatus === 'success' && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center z-20">

                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                    <p className="text-gray-600">We'll get back to you shortly with your demo credentials.</p>
                    <button
                        onClick={() => setLocalStatus('idle')}
                        className="mt-6 text-prime-blue font-semibold hover:underline"
                    >
                        Send another request
                    </button>
                </div>
            )}
        </form>
    );
};

export default BookDemoForm;
