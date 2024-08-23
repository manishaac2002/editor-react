
import "easymde/dist/easymde.min.css";
import { GetInstance } from "./GetInstance";


import TopNavigation  from "../demo/TopNavigation";

import React from "react";

const Demo = () => {
  return (
    <div className="container container-narrow">
      <TopNavigation onWriteClick={function (): void {
        throw new Error("Function not implemented.");
      } }/>  
      <GetInstance />
     
    </div>
  );
};

export default Demo;
