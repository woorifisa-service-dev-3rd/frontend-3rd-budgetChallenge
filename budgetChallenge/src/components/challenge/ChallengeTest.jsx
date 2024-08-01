import React from "react";

const ChallengeTest = ({ date, isToday, usedToday, balance }) => {
  // TODO: balance가 undefined 일 때
  const backgroundColor = balance < 0 ? "bg-red-500" : "bg-green-500";
  console.log(date, backgroundColor, balance);
  return (
    <div
      className={`flex-1 text-center border-solid border-2 ${backgroundColor} ${
        isToday ? "border-gray-500" : "border-gray-200"
      } p-2 m-1 rounded`}
    >
      <div className="font-bold">{date.getDate()}</div>
      <div className="text-sm">{usedToday}</div>
    </div>
  );
};

export default ChallengeTest;
