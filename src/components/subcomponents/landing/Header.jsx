const Header = () => {

    const handleScrollToFeatures = () => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="bg-indigo-600 text-white">
            <div className="container mx-auto px-10 py-6 h-screen flex flex-col lg:flex-row items-start lg:items-center justify-around">
                <div className="w-full lg:w-1/2 text-center lg:text-left flex-colitems-start lg:items-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 lg:my-6 order-1">
                        Save, Organize, and Discover Your Favorite Links Effortlessly
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl mb-6 order-2">
                        Bookmarkly helps you manage your favorite links with powerful search and organizational tools.
                    </p>
                    <div className="w-full mt-6 lg:hidden order-3">
                        <img
                            src="https://placehold.co/500x300"
                            alt="App mockup"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="mt-6 order-4">
                        <button
                            onClick={handleScrollToFeatures}
                            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100"
                        >
                            Learn More
                        </button>
                        <a
                            href="#"
                            className="ml-4 px-6 py-4 bg-indigo-700 text-white font-semibold rounded-lg shadow hover:bg-indigo-800"
                        >
                            Get Started
                        </a>
                    </div>
                    {/* <div className="flex justify-center lg:justify-start" >
                        <a href="#features" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all duration-200">Learn More</a>
                        <a href="#" className="ml-4 px-6 py-3 bg-indigo-700 text-white font-semibold rounded-lg shadow hover:bg-indigo-800 transition-all duration-200">Get Started</a>
                    </div> */}
                </div>
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0 hidden lg:block">
                    <img src="https://placehold.co/500x300" alt="App mockup" className="rounded-lg shadow-md" />
                </div>
            </div>
        </header>
    );
};

export default Header;