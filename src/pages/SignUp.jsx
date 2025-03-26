import React, { useState } from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [isAgency, setIsAgency] = useState(null);
  const navigate = useNavigate()

  const handleAgencyChange = (e) => {
    setIsAgency(e.target.value);
   
  };

  function handleClick(){
    navigate('/profile')
  }

  return (
    <Layout>
      <div className="flex flex-col w-full h-full px-6 py-6 justify-between">
        {/* Title */}
        <div className="w-full pt-18 pb-5 text-left">
          <Title Text1={"Create your PopX account"} />
        </div>

       
        <form className="flex flex-col gap-4 flex-grow ">
          {/* Full Name */}
          <div className="relative w-full">
            <label htmlFor="full-name" className="absolute left-3 bg-[#F7F8F9] px-1 text-sm text-purple-600">
              Full Name
            </label>
            <input id="full-name" className="w-full px-3 py-3 border border-gray-300 rounded-md" type="text" />
          </div>

          {/* Phone Number */}
          <div className="relative w-full">
            <label htmlFor="phone" className="absolute left-3 bg-[#F7F8F9] px-1 text-sm text-purple-600">
              Phone Number
            </label>
            <input id="phone" className="w-full px-3 py-3 border border-gray-300 rounded-md" type="tel" />
          </div>

          {/* Email */}
          <div className="relative w-full">
            <label htmlFor="email" className="absolute left-3 bg-[#F7F8F9] px-1 text-sm text-purple-600">
              Email
            </label>
            <input id="email" className="w-full px-3 py-3 border border-gray-300 rounded-md" type="email" />
          </div>

          {/* Password */}
          <div className="relative w-full">
            <label htmlFor="password" className="absolute left-3 bg-[#F7F8F9] px-1 mt-[-3px] text-sm text-purple-600">
              Password
            </label>
            <input id="password" className="w-full px-3 py-3 border border-gray-300 rounded-md" type="password" />
          </div>

          {/* Company Name */}
          <div className="relative w-full">
            <label htmlFor="company" className="absolute left-3 bg-[#F7F8F9]  text-sm text-purple-600">
              Company Name
            </label>
            <input id="company" className="w-full px-3 py-3 border border-gray-300 rounded-md" type="text" />
          </div>

          {/* checkboxx */}
          <div className="relative mt-4 w-full">
            <span className="text-sm text-[#1D2226]">Are you an agency?</span>
            <div className="flex items-center mt-2">
              <input id="agency-yes"  type="radio" name="isAgency" value="yes" checked={isAgency === "yes"} onChange={handleAgencyChange} className="mr-2 accent-[#6C25FF] peer" />
              <label htmlFor="agency-yes" className="text-sm text-[#1D2226] mr-4">Yes</label>
              <input id="agency-no" type="radio" name="isAgency" value="no" checked={isAgency === "no"} onChange={handleAgencyChange} className="mr-2 accent-[#6C25FF] peer" />
              <label htmlFor="agency-no" className="text-sm text-[#1D2226]">No</label>
            </div>
          </div>
        </form>

        {/* Login Button */}
        <div className="flex justify-center w-full mt-6">
          <button onClick={()=>handleClick()} className="bg-[#6C25FF] text-white text-[16px] w-full max-w-[335px] h-[46px] rounded-[6px] cursor-pointer">
            Create Account
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
