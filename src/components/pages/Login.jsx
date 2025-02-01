import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-indigo-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-indigo-700 text-center">Welcome Back</h2>
                <p className="text-gray-500 text-center mb-6">Log in to continue</p>

                <form>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none text-base"
                        />
                    </div>

                    {/* Password Input with Toggle */}
                    <div className="mb-4 relative">
                        <label className="block text-gray-600 font-medium mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none pr-12"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-6">
                        {/* <label className="flex items-center">
                            <input type="checkbox" className="mr-2" /> Remember me
                        </label> */}
                        <a href="/user/passwordreset" className="text-indigo-600 hover:underline">Forgot password?</a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>

                {/*                
                <div className="text-center my-6 text-gray-500">or</div>

                
                <button className="w-full flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-xl hover:bg-gray-200 transition">
                    <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" className="w-5 h-5" />
                    <span>Continue with Google</span>
                </button> */}

                {/* Sign Up Link */}
                <p className="mt-4 text-gray-600 text-center">
                    Don't have an account? <a href="/user/register" className="text-indigo-600 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
