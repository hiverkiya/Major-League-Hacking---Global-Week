import React from "react";

function FAQ() {
  return (
    <div className="grid h-screen place-items-center bg-gradient-to-tr from-cyan-400 to-yellow-400">
      <div className=" rounded-2xl bg-yellow-200 text-lg font-semibold uppercase p-4 flex-reverse justify-center items-center text-center flex-auto">
        <div className="animate-pulse mb-5  p-4 bg-green-300 rounded-xl">
          {" "}
          FAQ page for the Hackerabad Guild
        </div>
        <div>
          {" "}
          Are people in the guild friendly?{" "}
          <span className="font-bold text-red-500 ">Yes they are!</span>
        </div>
        <div>
          {" "}
          How can I join your guild?{" "}
          <span className="font-bold text-red-500 ">Check our Discord</span>
        </div>
      </div>
      <div className="text-7xl text-red-400 p-4 bg-cyan-200 rounded-2xl">
        Made during MLH
      </div>
    </div>
  );
}

export default FAQ;
