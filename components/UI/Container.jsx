import React from "react";

const Container = ({ id, children, className = "" }) => {
  return (
    <div
      id={id}
      className={`${className} p-4  md:p-6 lg:p-8 xl:p-10 mx-auto max-w-360`}
    >
      {children}
    </div>
  );
};

export default Container;
