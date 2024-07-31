import React from "react";
import { DummyData_Budget } from "../../constants/dummyData";

// 주의 월요일 반환
const getMondayOfWeek = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDay();
  const diff = (day === 0 ? -6 : 1) - day; // 일요일 0, 월요일 1 ... 토요일 6
  const monday = new Date(date);
  monday.setDate(date.getDate() + diff);
  return monday;
};

// 현재 날짜의 요일 반환
const getTodayDayName = () => {
  const today = new Date();
  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return dayNames[today.getDay() === 0 ? 6 : today.getDay() - 1];
};

// 주어진 날짜의 요일 반환
const getDayName = (dateString) => {
  const date = new Date(dateString);
  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return dayNames[date.getDay() === 0 ? 6 : date.getDay() - 1];
};

const ChallengeWeek = () => {
  // 월요일부터 시작하는 주의 요일 계산
  const startDate = DummyData_Budget[0]?.startDate || new Date();
  const startMonday = getMondayOfWeek(startDate);

  // 현재 날짜 요일
  const todayDayName = getTodayDayName();

  // 요일 목록
  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <div>
      <h1>Challenge Week Days</h1>
      <ul className="flex">
        {dayNames.map((dayName, index) => (
          <li
            key={index}
            className={`p-4 border ${
              dayName === todayDayName
                ? "border-green-600 border-2"
                : "border-gray-300"
            }`}
          >
            <div>{dayName}</div>
            {/* 여기에 지출 내역 반영 */}
            <li>메롱</li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeWeek;
