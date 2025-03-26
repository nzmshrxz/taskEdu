import React from "react";

const Layout = ({ children, title }) => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="mb-20 flex flex-col  justify-end bg-[#F7F8F9] bg-no-repeat h-[812px] w-[375px]">
        {children} {/* Content hamesha bottom pe align hoga */}
      </div>
    </div>
  );
};

export default Layout;
