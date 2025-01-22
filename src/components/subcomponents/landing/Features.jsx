import React from 'react';

const Features = () => {
    const features = [
        {
            title: 'Effortless Organization',
            description: 'Group your saved links into folders and tag them for easy navigation. Quickly declutter your bookmarks and focus on what matters.',
            image: 'https://placehold.co/500x300', // Replace with relevant image
        },
        {
            title: 'Powerful Search',
            description: 'Find saved links instantly using tags, authors, or keywords. Your information is always just a few keystrokes away.',
            image: 'https://placehold.co/500x300',
        },
        {
            title: 'Make Descriptive Notes',
            description: 'Add detailed notes or descriptions to your saved links. Bookmarkly doubles as a knowledge management tool for your research.',
            image: 'https://placehold.co/500x300',
        },
        {
            title: 'Cross-Platform Access',
            description: 'Access your bookmarks seamlessly across web and devices. Enjoy a consistent experience anywhere.',
            image: 'https://placehold.co/500x300',
        },
        {
            title: 'Chrome Extension',
            description: 'Save links instantly with our upcoming browser extension. Capture content without leaving the page.',
            image: 'https://placehold.co/500x300',
        },
    ];

    return (
        <section id="features" className="py-16 bg-indigo-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-indigo-600 mb-16 pt-2">
                    Why Choose Bookmarkly?
                </h2>

                {/* Features Section */}
                <div className="space-y-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col-reverse md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                        >
                            {/* Text Content */}
                            <div className="md:w-1/2 px-6 text-center md:text-left">
                                <h3 className="text-3xl font-semibold text-indigo-600 mb-4 mt-4">{feature.title}</h3>
                                <p className="text-gray-600 text-lg">{feature.description}</p>
                            </div>

                            {/* Image/Visual */}
                            <div className="md:w-1/2 px-6">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="rounded-lg shadow-lg w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="h-2 bg-gradient-to-r from-gray-50 via-indigo-100 to-gray-50"></div> */}
        </section>
    );
};

export default Features;

// import React from 'react';
// import FeatureCard from './FeatureCard';

// const Features = () => {
//     const features = [
//         {
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
//                 </svg>
//             ),
//             title: 'Effortless Organization',
//             description: 'Group your saved links into folders and tag them for easy navigation.',
//         },
//         {
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16m-7 6h7" />
//                 </svg>
//             ),
//             title: 'Powerful Search',
//             description: 'Quickly locate saved links using tags, authors, or keywords.',
//         },
//         {
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l-4-4m0 0l4-4m-4 4h16" />
//                 </svg>
//             ),
//             title: 'Cross-Platform Access',
//             description: 'Access your bookmarks seamlessly across web and devices.',
//         },
//         {
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zM3 19c0-3.86 3.14-7 7-7s7 3.14 7 7v2H3v-2z" />
//                 </svg>
//             ),
//             title: 'Make Descriptive Notes',
//             description: 'Add detailed notes or descriptions to your saved links.',
//         },
//         {
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16m8-16v16m8-16v16" />
//                 </svg>
//             ),
//             title: 'Chrome Extension',
//             description: 'Save links instantly with our upcoming browser extension.',
//         },
//         {
//             icon: (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3h12M6 21h12m-6-18v18" />
//                 </svg>
//             ),
//             title: 'Filter & Search',
//             description: 'Quickly filter your bookmarks by tags, authors, or folders.',
//         },
//     ];

//     return (
//         <section id="features" className="py-16 bg-gray-50">
//             <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
//                     Why Choose Bookmarkly?
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//                     {features.map((feature, index) => (
//                         <FeatureCard
//                             key={index}
//                             icon={feature.icon}
//                             title={feature.title}
//                             description={feature.description}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Features;
