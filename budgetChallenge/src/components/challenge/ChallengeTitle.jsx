import React from "react";
import { DummyData_Budget } from "../../constants/dummyData";

const ChallengeTitle = () => {
  return (
    <>
      <div>ChallengeTitle</div>
      {DummyData_Budget.map((challenge) => (
        <p key={challenge.id}>{challenge.budgetTitle}</p>
      ))}
    </>
  );
};

export default ChallengeTitle;