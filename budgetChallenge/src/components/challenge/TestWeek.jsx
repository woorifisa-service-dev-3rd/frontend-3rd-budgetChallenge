import React, { useState, useEffect } from 'react';
import { useStore } from '../../contexts/ChallengeContext';
import { getStartOfWeek, getWeekDates } from '../../utils/dateUtils';
import { sumItemCostByDate } from '../../utils/expenseUtils';
import TestDay from './TestDay';

const TestWeek = () => {
    const { budgets = [], history = [] } = useStore(); // ChallengeContext에서 데이터 가져오기

    // 초기 설정 및 상태관리
    const inputStartDate = budgets.length > 0 ? new Date(budgets[0].startDate) : new Date();
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(inputStartDate);

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
    const title = `${startOfWeek.getFullYear()}.${startOfWeek.getMonth() + 1}`; // getMonth(): 첫 시작이 0이기 때문에 +1
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    const rangeTitle = endOfWeek.getMonth() !== startOfWeek.getMonth()
        ? `${title} - ${endOfWeek.getFullYear()}.${endOfWeek.getMonth() + 1}` : title;

    // 일자별 지출 합계 및 잔액 계산
    const total = budgets.length > 0 ? budgets[0].budgetAmount : 0;
    const [isTotal, setIsTotal] = useState(total);
    const result = sumItemCostByDate(history); // ChallengeContext의 데이터 사용

    const calculateBalance = () => {
        let balance = isTotal;

        // 날짜별 지출을 저장할 객체 (일별 총 지출금액이 일별 지출횟수만큼 반복되는 이슈 해결 위함)
        const usedCosts = {};

        // weekDates 배열의 날짜를 순회
        weekDates.forEach((weekDate) => {
            const dateKey = weekDate.date.toISOString().split("T")[0];
            const spentTotalCostToday = result[dateKey] || 0;

            if (!usedCosts[dateKey]) {
                balance -= spentTotalCostToday;
                weekDate.spentTotalCostToday = spentTotalCostToday;
                weekDate.balance = balance;
                usedCosts[dateKey] = true;
            }
        });
    };

    useEffect(() => {
        calculateBalance();
    }, [history, currentDate]) // 데이터나 날짜가 변경될 때마다 계산

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
                        budgetAmount={total} // 예산 금액
                        startDate={inputStartDate} // 시작 날짜
                    />
                ))}
            </div>
        </>
    );
};

export default TestWeek;
