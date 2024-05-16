import React from "react";
import { Route } from "react-router-dom";
import DisplayHome from "./DisplayHome";

const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Route>
        <Route path="/" element={<DisplayHome />} />
      </Route>
    </div>
  );
};

export default Display;
