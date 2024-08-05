import React from "react";
import ChallengeBody from "../components/challenge/ChallengeBody";
import Budget from "../components/budget/Budget"

const LeftBody = () => {

  return (
    <>
      <div className='bg-blue-200 mb-10'>
        <ChallengeBody />
      </div>
      <div className='bg-white'>
        <Budget />
      </div>
    </>
  );
};

export default LeftBody;