"use client";
import React from "react";

const PrimaryButton = ({ children, type }) => {
  return (
    <button
      type={type}
      className=" cursor-pointer w-auto text-sm  bg-primary text-foreground font-bold py-2 px-4 rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
