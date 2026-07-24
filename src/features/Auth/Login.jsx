import Button from "../../common/components/Button"
import Input from "../../common/components/Input"
import Checkbox from '@mui/material/Checkbox';
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from 'react'
import { toast } from "react-toastify";

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors = {};

            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Please enter a valid email address';
            }

            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters';
            } else if (!values.password.includes('@')) {
                errors.password = 'Password must contain the special character @';
            }

            return errors;
        },
        onSubmit: async (values) => {
            setIsLoading(true);
            try {
                const Users = getUsers()
                const matchedUser = Users.find(u => u.email === values.email && u.password === values.password);
                if (!matchedUser) {
                    toast.error("Invalid email or password. Please try again or Signup.");
                    return;
                }

                // Create a copy and remove password before saving to session
                const sanitizedUser = { ...matchedUser };
                delete sanitizedUser.password;

                saveCurrentUser(sanitizedUser);
                navigate("/home");
            } finally {
                setIsLoading(false);
            }
        },
    });

    return <>
        <div
            className="min-h-screen bg-cover bg-center text-white flex flex-col justify-between"
        >

            <nav className="sticky top-0 shadow-md z-50  bg-[#18181C]">
                {/* Header */}
                <header className=" px-6 md:px-10 py-3 flex items-center gap-2">
                    {/* <img src={Logo} alt='Logo' className='w-10 h-10' /> */}
                    <span className="font-bold text-lg tracking-wide font-[Poppins] text-[#6366F1]">EduFlow</span>
                </header>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center justify-items-center">

                    <div className="w-full max-w-full md:max-w-sm bg-[#1E1E24]/90 backdrop-blur-md border border-white/10 rounded-4xl p-6 md:p-6 h-96 shadow-2xl flex flex-col justify-start gap-4">



                    </div>

                    {/* Right Column (Card + Footer) */}
                    <div className="w-full max-w-[390px] flex flex-col gap-5">
                        {/* Right Card - Login Form */}
                        <div className="w-full bg-[#18181C] border border-white/5 rounded-[24px] p-6 md:p-6 shadow-2xl">
                            <h2 className="text-white font-semibold text-xl md:text-2xl font-[Poppins] tracking-tight mb-1.5">
                                Welcome Back
                            </h2>
                            <p className="text-[#71717A] text-xs font-[Manrope] mb-6">
                                Please enter your details to sign in.
                            </p>


                            <div className="flex flex-col gap-2.5 mb-3">

                                <Button
                                    type="button"
                                    className="w-full h-10 flex items-center justify-center gap-2.5 bg-[#22222A] hover:bg-[#2A2A34] text-white text-xs font-semibold font-[Manrope] rounded-full border border-white/10 transition-all duration-200 cursor-pointer"
                                >
                                    {/* <img src={GoogleIcon} alt="Google" className="w-3.5 h-3.5" /> */}
                                    Log in with Google
                                </Button>


                                <Button
                                    type="button"
                                    className="w-full h-10 flex items-center justify-center gap-2.5 bg-white hover:bg-gray-100 text-black text-xs font-semibold font-[Manrope] rounded-full transition-all duration-200 cursor-pointer"
                                >
                                    {/* <img src={AppleIcon} alt="Apple" className="w-3.5 h-3.5" /> */}
                                    Log in with Apple
                                </Button>


                                <Button
                                    type="button"
                                    className="w-full h-10 flex items-center justify-center gap-2.5 bg-[#0077B5] hover:bg-[#00669C] text-white text-xs font-semibold font-[Manrope] rounded-full transition-all duration-200 cursor-pointer"
                                >
                                    {/* <img src={LinkedInIcon} alt="LinkedIn" className="w-3.5 h-3.5" /> */}
                                    Log in with LinkedIn
                                </Button>
                            </div>

                            {/* OR Divider */}
                            <div className="flex items-center gap-2.5 mb-2">
                                <div className="flex-1 h-px bg-white/10" />
                                <span className="text-[#52525B] text-[10px] font-[Manrope] tracking-widest">OR</span>
                                <div className="flex-1 h-px bg-white/10" />
                            </div>

                            {/* Form */}
                            <form onSubmit={formik.handleSubmit} noValidate className="flex flex-col gap-4">
                                {/* Email */}
                                <Input
                                    label="Email Address"
                                    type="email"
                                    placeholder="name@company.com"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && formik.errors.email}
                                    size="small"
                                />

                                {/* Password */}
                                <Input

                                    label="Password"
                                    rightElement={
                                        <span
                                            className="text-[#6366F1] text-[11px] font-[Manrope] font-medium cursor-pointer hover:text-[#4F46E5] transition-colors"
                                        >
                                            Forgot password?
                                        </span>
                                    }
                                    type="password"
                                    placeholder="••••••••"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && formik.errors.password}
                                    size="small"
                                />

                                {/* Remember Checkbox */}
                                <div className="flex items-center gap-1.5 -ml-2">
                                    <Checkbox
                                        size="small"
                                        checked={formik.values.remember || false}
                                        onChange={(e) => formik.setFieldValue('remember', e.target.checked)}
                                        sx={{
                                            color: 'rgba(255,255,255,0.2)',
                                            '&.Mui-checked': { color: '#6366F1' },
                                            padding: '4px',
                                        }}
                                    />
                                    <span className="text-[#A1A1AA] text-xs font-[Manrope]">
                                        Remember for 30 days
                                    </span>
                                </div>

                                {/* Sign In Button */}
                                <Button
                                    type="submit"
                                    variant="primary"
                                    // disabled={isLoading}
                                    className="w-full h-10 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold rounded-2xl tracking-wide transition-all duration-200 shadow-lg shadow-[#6366F1]/20 font-[Poppins] !py-2 text-xs"
                                >
                                    {isLoading ? "Loging In..." : "Log In"}
                                    {/* Sign In */}
                                </Button>

                                {/* Sign Up Link */}
                                <p className="text-center text-[#A1A1AA] text-xs font-[Manrope]">
                                    Don't have an account?{' '}
                                    <NavLink to="/signup">
                                        <span className="text-[#6366F1] font-medium cursor-pointer hover:text-[#4F46E5] transition-colors">
                                            Sign up for free
                                        </span>
                                    </NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>

}

export default Login;