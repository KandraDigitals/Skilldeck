import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../../public/logos/mainlogo.svg';
import custom from '../../../public/images/custom.svg';

import {
    tableData,
    featureData,
    operationalData,
    marketingData,
    contentManagementData,
    salesTeamData,
} from '../Data/userTableData';
import PricingTable from '../home/PricingTable';
import { FaWordpress } from 'react-icons/fa';

const UserTable = () => {
    const [screenWidth, setScreenWidth] = useState("");

    useEffect(() => {
        const updateImagesPerPage = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setScreenWidth('large');
            } else if (width >= 768) {
                setScreenWidth("medium");
            } else if (width >= 140) {
                setScreenWidth("small");
            } else {
                setScreenWidth("large");
            }
        };

        updateImagesPerPage();
        window.addEventListener('resize', updateImagesPerPage);

        return () => {
            window.removeEventListener('resize', updateImagesPerPage);
        };
    }, []);

    const renderRows = (data: Array<any>) => {
        return data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
                <td className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-xs md:text-base font-semibold">
                    {row.feature}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                    {row.wordpress}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                    {row.custom}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base font-medium text-prime-blue ">
                    {row.skillDeck}
                </td>
            </tr>
        ));
    };

    return (
        <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg md:shadow-none lg:container lg:mx-auto mt-24" id='features'>
            <div className="w-full">
                {/* Desktop */}

                <table className="  min-w-full table-auto border-collapse  hidden md:block">
                    {/* make this as top sticky  */}
                    <thead >
                        <tr className="sticky top-0 bg-gray-100">
                            <th className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base text-start">
                                Feature
                            </th>
                            <th className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                                <div className="flex items-center gap-3 text-[#1b769c] justify-start text-xl">
                                    <FaWordpress className='text-2xl' />
                                    WordPress
                                </div>
                            </th>
                            <th className="px-2 md:px-4 h-16 border border-gray-200 text-sm md:text-base flex items-center justify-start text-[#F48B19] gap-3">
                                <Image
                                    src={custom}
                                    alt="custom"
                                    className="h-8  w-auto md:h-6  "
                                />
                                Custom
                            </th>
                            <th className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base ">
                                <div className="relative flex items-center  ">
                                    <Image
                                        src={logo}
                                        alt="SkillDeck Logo"
                                        className="h-8  w-auto md:h-10 "
                                    />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} className="text-prime-dark py-4 text-center font-bold text-xl md:text-2xl">
                                Technical Stack
                            </td>
                        </tr>
                        {renderRows(tableData)}
                        <tr>
                            <td colSpan={4} className="text-prime-dark py-4 text-center font-bold text-xl md:text-2xl">
                                Features
                            </td>
                        </tr>
                        {renderRows(featureData)}
                        <tr>
                            <td colSpan={4} className="text-prime-dark py-4 text-center font-bold text-xl md:text-2xl">
                                Operations
                            </td>
                        </tr>
                        {renderRows(operationalData)}
                        <tr>
                            <td colSpan={4} className="text-prime-dark py-4 text-center font-bold text-xl md:text-2xl">
                                Marketing
                            </td>
                        </tr>
                        {renderRows(marketingData)}
                        <tr>
                            <td colSpan={4} className="text-prime-dark py-4">
                                <PricingTable />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} className="text-prime-dark py-4 text-center font-bold text-xl md:text-2xl">
                                Content Management
                            </td>
                        </tr>
                        {renderRows(contentManagementData)}
                        <tr>
                            <td colSpan={4} className="text-prime-dark py-4 text-center font-bold text-xl md:text-2xl">
                                Sales Team
                            </td>
                        </tr>
                        {renderRows(salesTeamData)}
                    </tbody>
                </table>

                {/* Mobile view */}
                <div className='parent'>
                    <table className="child scrollbar min-w-full table-auto border-collapse lg:border border-gray-200 md:hidden block ">
                        {/* make this as top sticky  */}
                        <thead >
                            <tr className="sticky top-0 bg-gray-100">
                                <th className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base text-start">
                                    Feature
                                </th>
                                <th className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                                    <div className="flex items-center gap-3 text-[#1b769c] justify-start text-base">
                                        <FaWordpress className='text-xl' />
                                        WordPress
                                    </div>
                                </th>
                                <th className="px-2 md:px-4 h-16 border border-gray-200 text-sm md:text-base flex items-center justify-start text-[#F48B19] gap-3">
                                    <Image
                                        src={custom}
                                        alt="custom"
                                        className="h-6  w-auto  "
                                    />
                                    Custom
                                </th>
                                <th className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                                    <Image
                                        src={logo}
                                        alt="SkillDeck Logo"
                                        className="h-6  w-auto md:h-10"
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={(screenWidth === 'large' || screenWidth === 'medium') ? 4 : 1} className="text-prime-dark py-4 text-center font-bold text-base md:text-2xl">
                                    Technical Stack
                                </td>
                            </tr>
                            {renderRows(tableData)}
                            <tr>
                                <td colSpan={(screenWidth === 'large' || screenWidth === 'medium') ? 4 : 1} className="text-prime-dark py-4 text-center font-bold text-base md:text-2xl">
                                    Features
                                </td>
                            </tr>
                            {renderRows(featureData)}
                            <tr>
                                <td colSpan={(screenWidth === 'large' || screenWidth === 'medium') ? 4 : 1} className="py-4 text-center font-bold text-base md:text-2xl">
                                    Operations
                                </td>
                            </tr>
                            {renderRows(operationalData)}
                            <tr>
                                <td colSpan={(screenWidth === 'large' || screenWidth === 'medium') ? 4 : 1} className="text-prime-dark py-4 text-center font-bold text-base md:text-2xl">
                                    Marketing
                                </td>
                            </tr>
                            {renderRows(marketingData)}
                            <tr>
                                <td colSpan={4} className="text-prime-dark py-4">
                                    <PricingTable />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={(screenWidth === 'large' || screenWidth === 'medium') ? 4 : 1} className="text-prime-dark py-4 text-center  font-bold text-base md:text-2xl">
                                    Content Management
                                </td>
                            </tr>
                            {renderRows(contentManagementData)}
                            <tr>
                                <td colSpan={(screenWidth === 'large' || screenWidth === 'medium') ? 4 : 1} className="text-prime-dark py-4 text-center font-bold text-base md:text-2xl">
                                    Sales Team
                                </td>
                            </tr>
                            {renderRows(salesTeamData)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
