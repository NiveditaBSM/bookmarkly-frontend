const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">&copy; {new Date().getFullYear()} Bookmarkly. All rights reserved.</p>
                    </div>
                    <div className="space-x-4">
                        <a href="/privacy" className="text-gray-400 hover:text-white text-sm">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="text-gray-400 hover:text-white text-sm">
                            Terms of Service
                        </a>
                        <a href="/contact" className="text-gray-400 hover:text-white text-sm">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;