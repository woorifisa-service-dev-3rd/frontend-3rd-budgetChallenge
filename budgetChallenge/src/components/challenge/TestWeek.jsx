import React, { useState } from 'react'
import { getStartOfWeek, getWeekDates } from '../../utils/dateUtils'
import { sumItemCostByDate } from '../../utils/expenseUtils';
import { DummyData_Budget, DummyData_History } from '../../constants/dummyData';
import TestDay from './TestDay';

const TestWeek = () => {
    // 초기 설정 및 상태관리
    const inputStartDate = new Date(DummyData_Budget[0].startDate); // TODO: props - modal: startDate 받기
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(inputStartDate); // 현재 표시된 주의 날짜를 상태로 관리

    // 주 변경, 리셋 함수
    const changeWeek = (weeks) => { // weeks: +1 or -1
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + weeks * 7); // -7(전주) or +7(차주)
        setCurrentDate(newDate);
    }
    const resetToCurrentWeek = () => {
        setCurrentDate(today);
    }

    // 주간 날짜 계산
    const startOfWeek = getStartOfWeek(currentDate);
    const weekDates = getWeekDates(startOfWeek);

    // 날짜 범위, 제목
    const title = `${startOfWeek.getFullYear()}.${startOfWeek.getMonth() + 1}` // getMonth(): 첫 시작이 0이기 때문에 +1
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    const rangeTitle = endOfWeek.getMonth() !== startOfWeek.getMonth()
        ? `${title} - ${endOfWeek.getFullYear()}.${endOfWeek.getMonth() + 1}` : title;

    // 일자별 지출 합계 및 잔액 계산
    const total = DummyData_Budget[0].budgetAmount;
    const [isTotal, setIsTotal] = useState(total);
    const result = sumItemCostByDate(DummyData_History);

    const calculateBalance = () => {
        let balance = isTotal;

        // 날짜별 지출을 저장할 객체 (일별 총 지출금액이 일별 지출횟수만큼 반복되는 이슈 해결 위함)
        const usedCosts = {};

        for (let i = 0; i < DummyData_History.length; i++) {
            const dateKey = DummyData_History[i].date.toISOString().split("T")[0];
            const spentTotalCostToday = result[dateKey];

            // 해당 날짜에 대한 지출이 이미 처리되었다면 skip
            if (usedCosts[dateKey]) continue;

            for (let j = 0; j < weekDates.length; j++) {
                if (weekDates[j].date.toISOString().split("T")[0] === dateKey) {
                    balance -= spentTotalCostToday;
                    weekDates[j] = { ...weekDates[j], spentTotalCostToday, balance }
                    // 지출 금액 처리 완료 기록
                    usedCosts[dateKey] = true;
                }
            }
        }
    };
    calculateBalance();


    return (
        <>
            <div>TestWeek</div>
            {/* 제목, 이동버튼(전주, 금주, 차주), 주간달력 */}
            <div>{rangeTitle}</div>
            <div>
                <button onClick={() => changeWeek(-1)} className='hover:bg-gray-300'>⬅️</button>
                <button onClick={() => resetToCurrentWeek()}>🔄️</button>
                <button onClick={() => changeWeek(1)} className='hover:bg-gray-300'>➡️</button>
            </div>
            <div className='flex justify-around'>
                {weekDates.map((item, index) => (
                    <TestDay
                        key={index}
                        date={item.date}
                        day={item.date.getDay()}
                        isToday={
                            item.date.getFullYear() === today.getFullYear() &&
                            item.date.getMonth() === today.getMonth() &&
                            item.date.getDate() === today.getDate()
                        }
                        spentTotalCostToday={item.spentTotalCostToday || 0}
                        balance={item.balance || 0}
                    />
                ))}
            </div>
        </>
    )
}

export default TestWeek