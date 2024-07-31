import React from "react";
import { DummyData_Budget } from "../../constants/dummyData";

// Budget Modal 시작일 +7일 -> 다음 id로 변경되도록 if문 설정 필요
const ChallengeTitle = () => {
  return (
    <>
      <div>ChallengeTitle</div>
      {DummyData_Budget.map((data) => (
        <div key={data.id}>{data.budgetTitle}</div>
      ))}
    </>
  );
};

export default ChallengeTitle;
