import React from "react";
import { DummyData_History } from "../../constants/dummyData";

const ChallengeDay = ({ date, isToday }) => {
  // 현재 날짜에 해당하는 사용 내역 필터링
  const spentItems = DummyData_History.filter(
    (spent) => spent.date.toDateString() === date.toDateString()
  );

  // 합성된 itemCost 계산
  const totalSpent = spentItems.reduce(
    (total, spent) => total + parseInt(spent.itemCost, 10),
    0
  );

  return (
    <>
      <div
        className={`flex-1 text-center border-solid border-2 ${
          isToday ? "border-blue-700" : "border-gray-300"
        }`}
      >
        {date.getDate()}
        {spentItems.length > 0 && (
          <div>
            {spentItems.length > 0 && (
              <div className="text-xs">
                <span>-{totalSpent}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ChallengeDay;
