import React, { useState } from 'react';
import Factory from "../../assets/undraw_factory.svg";


const RegistrationForm = () => {
    const [accountType, setAccountType] = useState('Merchant');
    const style = {
        backgroundImage: `url(${Factory})`,
        opacity: 0.9,
    }


    return (
        <>

            <div style={style} className="w-[70vw] h-full bg-center mt-10 bg-contain bg-no-repeat fixed hidden md:block">

                <div className="text-left ml-20">
                    <p className="text-6xl m-4 mt-20 font-bold ">BizAmplify</p>

                    <p className="text-xl font-normal mt-10">An innovative platform designed to <b className="text-[#67da20] text-2xl">Empower</b>
                        <br /> <b>Micro & Nano Businesses</b></p>

                    <div className="flex flex-col gap-8 text-xl font-semibold mt-10">
                        <p className="flex gap-2"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2N2RhMjAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1jaGVjay1iaWciPjxwYXRoIGQ9Ik0yMS44MDEgMTBBMTAgMTAgMCAxIDEgMTcgMy4zMzUiLz48cGF0aCBkPSJtOSAxMSAzIDNMMjIgNCIvPjwvc3ZnPg==" alt="check" /> Personalized Feed</p>
                        <p className="flex gap-2"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2N2RhMjAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1jaGVjay1iaWciPjxwYXRoIGQ9Ik0yMS44MDEgMTBBMTAgMTAgMCAxIDEgMTcgMy4zMzUiLz48cGF0aCBkPSJtOSAxMSAzIDNMMjIgNCIvPjwvc3ZnPg==" alt="check" /> Financial Support</p>
                        <p className="flex gap-2"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2N2RhMjAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1jaGVjay1iaWciPjxwYXRoIGQ9Ik0yMS44MDEgMTBBMTAgMTAgMCAxIDEgMTcgMy4zMzUiLz48cGF0aCBkPSJtOSAxMSAzIDNMMjIgNCIvPjwvc3ZnPg==" alt="check" /> Enganging Community</p>
                    </div>
                </div>
            </div>

            {/* RegistrationForm */}

            <div className=" fixed top-0 px-14 py-8 right-0 z-50 h-screen items-center justify-center flex md:w-[30vw] bg-gray-100 w-full">
                <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center mb-6">Create an account</h2>

                    <div className="flex justify-center mb-6">
                        <button
                            className={`px-4 py-1 font-semibold rounded-l-lg ${accountType === 'Merchant' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                                }`}
                            onClick={() => setAccountType('Merchant')}
                        >
                            Merchant
                        </button>
                        <button
                            className={`px-4 py-1 font-semibold rounded-r-lg ${accountType === 'Agent' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
                                }`}
                            onClick={() => setAccountType('Agent')}
                        >
                            Investor
                        </button>
                    </div>

                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                className="mt-1 p-1 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#67DA20]"
                                placeholder="First Name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Where is your company based?</label>
                            <select
                                className="mt-1 p-1 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#67DA20]"
                            >
                                <option>Select Location</option>
                                <option>Andhra Pradesh</option>
                                <option>Arunachal Pradesh</option>
                                <option>Assam</option>
                                <option>Bihar</option>
                                <option>Chhattisgarh</option>
                                <option>Goa</option>
                                <option>Gujarat</option>
                                <option>Haryana</option>
                                <option>Himachal Pradesh</option>
                                <option>Jharkhand</option>
                                <option>Karnataka</option>
                                <option>Kerala</option>
                                <option>Madhya Pradesh</option>
                                <option>Maharashtra</option>
                                <option>Manipur</option>
                                <option>Meghalaya</option>
                                <option>Mizoram</option>
                                <option>Nagaland</option>
                                <option>Odisha</option>
                                <option>Punjab</option>
                                <option>Rajasthan</option>
                                <option>Sikkim</option>
                                <option>Tamil Nadu</option>
                                <option>Telangana</option>
                                <option>Tripura</option>
                                <option>Uttar Pradesh</option>
                                <option>Uttarakhand</option>
                                <option>West Bengal</option>
                                <option>Andaman and Nicobar Islands</option>
                                <option>Chandigarh</option>
                                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                <option>Delhi</option>
                                <option>Lakshadweep</option>
                                <option>Puducherry</option>
                                <option>Ladakh</option>
                                <option>Jammu and Kashmir</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Business E-mail</label>
                            <input
                                type="email"
                                className="mt-1 p-1 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#67DA20]"
                                placeholder="Business E-mail"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Please select an Industry</label>
                            <select
                                className="mt-1 p-1 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#67DA20]"
                            >
                                <option>Select Industry</option>
                                <option>Technology</option>
                                <option>Healthcare</option>
                                <option>Banking</option>
                                <option>Finance</option>
                                <option>Education</option>
                                <option>Travel</option>
                                <option>Real Estate</option>
                                <option>Manufacturing</option>
                                <option>Government</option>
                                <option>Others</option>
                            </select>
                        </div>

                        {/* <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Phone number</label>
                            <input
                                type="tel"
                                className="mt-1 p-1 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#67DA20]"
                                placeholder="Phone number"
                            />
                        </div> */}

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                className="mt-1 p-1 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#67DA20]"
                                placeholder="Password"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox checked:bg-[#] h-4 w-4 text-[#67DA20] focus:ring-0 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-600">
                                    I accept the <a href="/" className="text-[#4285F4] hover:underline">Privacy Policy</a>
                                </span>
                            </label>
                        </div>

                        <button

                            type="submit"
                            className="w-full bg-[#000000] text-white py-2 rounded-lg hover:bg-[#4285F4] transition duration-300"
                        >
                            <a href='/'>Create an Account</a>
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600 font-medium">
                            Already have an account?{' '}
                            <a href="/" className="text-[#4285F4] hover:underline">
                                Log In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationForm;
