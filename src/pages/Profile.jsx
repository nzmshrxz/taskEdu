import React from "react";
import Layout from "../components/Layout";
import marrydoe from "../assets/marrydoe.png"; 

const Profile = () => {
  return (
    <Layout>

      <div className="w-full min-h-[100vh] flex flex-col items-start pt-1">
        
     
        <h2 className="text-[#1D2226] w-full h-[68px] bg-white text-[18px] font-normal flex items-center pl-4 shadow-md">
          Account Settings
        </h2>

        {/* Profile Section */}
        <div className="flex items-center gap-4 pl-3 mt-6">
          {/* Profile Image */}
          <img className="w-16  h-16 rounded-full object-cover" src={marrydoe} alt="Marry Doe" />

          {/* Profile Details */}
          <div>
            <h5 className="text-lg font-semibold text-[#1D2226]">Marry Doe</h5>
            <p className="text-sm text-gray-500">marry@gmail.com</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-6 pl-3">
          <p className="text-gray-700 text-[14px] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae omnis odit illo fuga exercitationem iure reiciendis tempora et non!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
