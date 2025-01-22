import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default FeatureCard;

// const FeatureCard = ({ icon, title, description }) => {
//     return (
//         <div className="text-center p-5 m-5 rounded-md">
//             <div className="bg-indigo-100 text-indigo-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
//                 {icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-2">{title}</h3>
//             <p className="text-gray-600">{description}</p>
//         </div>
//     );
// };

// export default FeatureCard;
