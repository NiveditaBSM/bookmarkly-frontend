import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Register = () => {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        let newErrors = {};
        if (!form.username.trim()) newErrors.username = "Username is required.";
        if (!form.email.includes("@")) newErrors.email = "Enter a valid email.";
        if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        console.log("Form submitted successfully:", form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-indigo-100 px-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-indigo-600 text-center mb-4">Create an Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username */}
                    <div>
                        <label className="block text-gray-700 font-medium">Username</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your username"
                            value={form.username}
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                        />
                        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium">Email Address</label>
                        <input
                            type="email"
                            className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Password with Toggle */}
                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 pr-10"
                                placeholder="Enter your password"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-gray-600 text-center">
                    Already have an account? <a href="/user/login" className="text-indigo-600 hover:underline">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
