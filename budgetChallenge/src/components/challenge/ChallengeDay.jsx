import React from "react";
import { DummyData_History } from "../../constants/dummyData";

const ChallengeDay = ({ date, isToday, result, totalBudget, remainBudget }) => {
  // 날짜를 yyyy-mm-dd 형식으로 변환
  const dateKey = date.toISOString().split("T")[0];
  // 날짜를 key 값으로 지출내역 출력
  const data = result[dateKey];

  // 배경색 결정
  const backgroundColor = remainBudget < 0 ? "bg-red-500" : "bg-green-500"; // 예산 초과 시 빨간색
  console.log(dateKey, remainBudget);

  return (
    <div
      className={`flex-1 text-center border-solid border-2 ${backgroundColor} ${
        isToday ? "border-gray-500" : "border-gray-200"
      } p-2 m-1 rounded`}
    >
      <div className="font-bold">{date.getDate()}</div>
      <div className="text-sm">{data}</div>
    </div>
  );
};

export default ChallengeDay;
