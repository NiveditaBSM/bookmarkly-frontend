const CallToAction = () => {
    return (
        <section className="bg-indigo-600 text-white py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Start Organizing Your Links Today!</h2>
                <p className="text-lg mb-6">
                    Sign up now and discover how Bookmarkly can simplify the way you manage and find your favorite resources.
                </p>
                <a
                    href="/signup"
                    className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100"
                >
                    Get Started
                </a>
            </div>
        </section>
    );
};

export default CallToAction