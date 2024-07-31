// 추후 진행
import React from "react";
import { DummyData_Budget } from "../../constants/dummyData";

// 날짜 확인
const checkDateCondition = (data, today) => {
  // new Date(): 현재 시간 구하기
  // getTime(): Date 타입의 시간을 밀리초로 환산
  // 1일 = 24시간, 1시간 = 60분, 1분 = 60초, 1초 = 1000 밀리초 => 하루 = (1000*60*60*24)
  const startDate = new Date(data.startDate);
  const timeDifference = today.getTime() - startDate.getTime();
  const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
  return dayDifference >= 0;
};

// 7일 경과 확인
const checkWeekCondition = (data, today) => {
  // new Date(): 현재 시간 구하기
  // getTime(): Date 타입의 시간을 밀리초로 환산
  // 1일 = 24시간, 1시간 = 60분, 1분 = 60초, 1초 = 1000 밀리초 => 하루 = (1000*60*60*24)
  const startDate = new Date(data.startDate);
  const timeDifference = today.getTime() - startDate.getTime();
  const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
  return dayDifference >= 7;
};

// 챌린지 데이터 처리
const getProcessedData = (today) => {
  const validData = DummyData_Budget.find((data) =>
    checkDateCondition(data, today)
  );

  console.log(validData);
  console.log(validData.id);
  if (validData) {
    // validData가 7일 이상
    if (checkWeekCondition(validData, today)) {
      validData.id += 1;
    }
    return validData;
  }
};

const ChallengeDateCheck = () => {
  const today = new Date();
  const processedData = getProcessedData(today);
  return processedData;
};

export default ChallengeDateCheck;
