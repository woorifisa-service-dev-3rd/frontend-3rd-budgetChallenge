import React, { useEffect, useState } from "react";
import { DummyData_Budget, DummyData_History } from "../../constants/dummyData";
import ChallengeDay from "./ChallengeDay";
import ChallengeTest from "./ChallengeTest";

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
  const dates = [];
  const getWeekDates = (startOfWeek) => {
    const date = new Date(startOfWeek);
    for (let i = 0; i < 7; i++) {
      dates.push({ date: new Date(date) });
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
  console.log(weekDates);

  // getMonth(): 0부터 시작 -> + 1 => 실제 월
  const title = `${startOfweek.getFullYear()}/${startOfweek.getMonth() + 1}`;
  const endOfWeek = new Date(startOfweek);
  endOfWeek.setDate(endOfWeek.getDate() + 6);

  //    주의 날짜 범위
  const rangeTitle =
    endOfWeek.getMonth() !== startOfweek.getMonth()
      ? `${title} - ${endOfWeek.getFullYear()}/${endOfWeek.getMonth() + 1}`
      : title;

  // week에서 쓸 total 변수를 state로 하나 만들자
  const total = DummyData_Budget[0].budgetAmount;
  const [isTotal, setIsTotal] = useState(total);

  /*

    시작 날짜면,
        (초기 금액을 props로 전달)
        초기 금액에서 오늘 사용한 금액 차감
        잔액 = 초기 금액 - 사용한 금액

    시작 날짜가 아니면,
        (초기 금액은 props로 내려주지 않음)
        잔액 = 잔액 - 사용한 금액
        

    props로 전달할 값
    1. (시작 날짜만) 초기 금액
    2. 당일 사용한 금액

  */
  // 일별 지출비용 합산
  const sumItemCostByDate = (data) => {
    const result = {};
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const dateKey = item.date.toISOString().split("T")[0];
      if (!result[dateKey]) {
        result[dateKey] = 0;
      }
      result[dateKey] += item.itemCost;
    }
    return result;
  };
  // 일자별 지출비용 계산
  const result = sumItemCostByDate(DummyData_History);
  console.log(typeof result);

  let balance = 0;

  const days = [];
  const calculate = () => {
    const startdate = DummyData_Budget[0].startDate;
    const onul = today.toISOString().split("T")[0];

    // 초기 금액을 잔액(balance)으로 복사
    balance = isTotal;

    // DummyData_History의 요소 수 만큼 반복
    for (let index = 0; index < DummyData_History.length; index++) {
      const kyou = Object.keys(result);

      const usedToday = result[kyou[index]];

      if (startdate) {
        // 잔액(balance) - 오늘 사용한 금액 차감
        balance -= usedToday;

        // dates 배열 내 날짜랑 usedToday의 날짜가 일치하면 해당 객체에 프로퍼티로 usedToday: usedToday, balance: balance 추가
        // if (dates.getDate() === kyou[0]) {
        //   dates.push({ usedToday: usedToday, balance: balance });
        // }
      }
      //   console.log(weekDates[0].date.toISOString().split("T")[0]);

      for (let idx = 0; idx < weekDates.length; idx++) {
        if (weekDates[idx].date.toISOString().split("T")[0] === kyou[index]) {
          weekDates[idx] = { ...weekDates[idx], usedToday, balance };
        }
      }
    }
  };
  calculate();

  // =============================================================

  // 일자별 total - 지출비용 = 잔여 예산, isTotal은 readonly이기 때문에 let sum = isTotal 이런 식으로 변수 선언, 처리된 값을 setIsTotal에 갱신
  //   const calculateRemainBudget = (total, expences) => {
  //     let totalExpenses = 0;
  //     for (const date in expences) {
  //       totalExpenses += expences[date];
  //     }
  //     return total - totalExpenses;
  //   };

  // 잔여 예산 -> ChallengeDay bg 바꾸기
  // 만약에 잔여 예산이 음수가 된다면 Challnge 실패(bg도 안 바꿈)
  //   useEffect(() => {
  //     const remainBudget = calculateRemainBudget(total, result);
  //     setIsTotal(remainBudget);
  //   }, [result, total]);

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
        {/* {weekDates.map((date) => (
          <ChallengeDay
            key={date.toISOString()}
            date={date}
            result={result}
            isToday={
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear()
            }
            totalBudget={total}
            remainBudget={isTotal}
          />
        ))} */}
        {weekDates.map((item, index) => (
          <ChallengeTest
            // TODO: 초기금액을 내려주는 변수를 주는데, 초기금액을 설정한 날에만
            key={index}
            date={item.date}
            isToday={
              item.date.getDate() === today.getDate() &&
              item.date.getMonth() === today.getMonth() &&
              item.date.getFullYear() === today.getFullYear()
            }
            usedToday={item.usedToday}
            balance={item.balance}
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengeWeek;
