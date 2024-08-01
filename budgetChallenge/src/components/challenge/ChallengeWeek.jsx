import React, { useState } from "react";
import { DummyData_Budget } from "../../constants/dummyData";
import ChallengeDay from "./ChallengeDay";

const ChallengeWeek = () => {
  // DummyData 받아오기
  const inputStartDate = new Date(DummyData_Budget[0].startDate);

  // 오늘 날짜
  const today = new Date();

  // 사용자 클릭 -> 이번 주, 지난 주
  const [currentDate, setCurrentDate] = useState(inputStartDate);

  // 시작 주
  const getStartOfWeek = (date) => {
    const day = new Date(date);
    const dayOfWeek = day.getDay(); // 일: 0, 월: 1 ... 토: 6
    const startOfWeek = new Date(day);
    startOfWeek.setDate(day.getDate() - dayOfWeek); // 월요일부터 시작하게 하려면 +1
    return startOfWeek;
  };

  // 주의 시작 날짜(push: date 객체 복사 -> dates 배열에 추가)
  const getWeekDates = (startOfWeek) => {
    const dates = [];
    const date = new Date(startOfWeek);
    for (let i = 0; i < 7; i++) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  // 다른 주로 변경
  const changeWeek = (weeks) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + weeks * 7);
    setCurrentDate(newDate);
  };

  // 이번 주로 다시
  const resetToCurrentWeek = () => {
    setCurrentDate(new Date());
  };

  // 시작 주, 시작 일
  const startOfweek = getStartOfWeek(currentDate);
  const weekDates = getWeekDates(startOfweek);
  // getMonth(): 0부터 시작 -> + 1 => 실제 월
  const title = `${startOfweek.getFullYear()}/${startOfweek.getMonth() + 1}`;
  const endOfWeek = new Date(startOfweek);
  endOfWeek.setDate(endOfWeek.getDate() + 6);
  //    주의 날짜 범위
  const rangeTitle =
    endOfWeek.getMonth() !== startOfweek.getMonth()
      ? `${title} - ${endOfWeek.getFullYear()}/${endOfWeek.getMonth() + 1}`
      : title;

  return (
    <div>
      <div className="text-center">
        <p id="calender" className="text-xl">
          {rangeTitle}
        </p>
      </div>
      <div className="flex justify-center">
        <button onClick={() => changeWeek(-1)} className="hover:bg-gray-300">
          ⬅
        </button>
        <button onClick={resetToCurrentWeek}>🔄</button>
        <button onClick={() => changeWeek(+1)} className="hover:bg-gray-300">
          ➡
        </button>
      </div>
      <div className="flex justify-around">
        {weekDates.map((date) => (
          <ChallengeDay
            key={date.toISOString()}
            date={date}
            isToday={
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear()
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengeWeek;
