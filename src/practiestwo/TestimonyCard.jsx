import React from "react";
import { useState } from "react";
// import {
//   FaChevronRight,
//   FaChevronLeft,
//   FaQuoteRight,
//   FaQuoteLeft,
// } from "react-icons/fa";

import users from "./TestimonyData";
function TestimonyCard() {
  const [index, setIndex] = useState(0);

  const { name, image, email, desc } = users[index];

  const checkUser = (num) => {
    if (num > users.length - 1) {
      return 0;
    }
    if (num < 0) {
      return users.length - 1;
    }
    return num;
  };

  const randomUser = () => {
    let newRandom = Math.floor(Math.random() * users.length);
    // console.log(newRandom);
    // the if statement here is to clear the array so that there is no repeated number
    if (newRandom === index) {
      newRandom = index - 1;
    }
    setIndex(checkUser(newRandom));
  };
  return (
    <>
      <section className="testimony-card">
        <h3>User</h3>
        <div className="image-con">
          <img src={image} />
          {/* <span className="img-icon">
            <FaQuoteLeft className="icon text-white rotate-[30deg]" />
            <FaQuoteRight className="text-white rotate-[30deg] left-[195px] absolute icon" />
          </span> */}
        </div>
        <p className=" name  text-lg text-black ">{name}</p>
        <p className=" email italic text-blue-900 hover:underline hover:cursor-pointer">
          {email}
        </p>
        <p className="text-center desc ">{desc}</p>
        <span
          onClick={() => {
            alert("Working on it");
          }}
          className="border-[0.1px] w-[70px] text-center rounded-xl bg-white hover:cursor-pointer hover:bg-gray-400"
        >
          More
        </span>
        <span className="hidden">Less</span>
        <div className="btn-con">
          <button
            onClick={(e) => {
              setIndex((index) => checkUser(index - 1));
            }}
            className="prev-btn"
          >
            {/* <FaChevronLeft /> */}
          </button>
          <button
            onClick={(e) => {
              setIndex((index) => checkUser(index + 1));
            }}
            className="next-btn"
          >
            {/* <FaChevronRight /> */}
          </button>
        </div>
        <div className="line-above h-[2px] mt-[6px] w-full bg-gray-600"></div>
        <button
          onClick={randomUser}
          className=" rand-btn relative top-[10px] hover:border-[2px] w-[150px] rounded-lg hover:bg-sky-500  hover:border-sky-500 text-sky-600 hover:text-white font-bold tracking-wider transition-all antialiased ease-linear "
        >
          Random
        </button>
      </section>
    </>
  );
}

export default TestimonyCard;
