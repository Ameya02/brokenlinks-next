
import React from 'react';

const BrokenTable = ({brokenLinks}) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sr.No
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        URL
                    </th>
                </tr>
            </thead>
            <tbody>
                {brokenLinks.map((link, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{link.url}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    );
};

export default BrokenTable;
