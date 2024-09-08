import React from "react";
import { useState } from "react";
import "./Testimony.css";
import TestimonyCard from "./TestimonyCard";
function Testimony() {
  return (
    <>
      <div className="test-app">
        <h1 className="text-green-400 text-3xl text-center font-bold tracking-wider">
          Users Testimony
        </h1>
        <TestimonyCard />
      </div>
    </>
  );
}

export default Testimony;
