// TestWeek.jsx
import React, { useState, useEffect } from 'react';
import { useChallenge } from '../../contexts/ChallengeContext';
import { getStartOfWeek, getWeekDates } from '../../utils/dateUtils';
import { sumItemCostByDate } from '../../utils/expenseUtils';
import TestDay from './TestDay';

const TestWeek = () => {
    const { budgets = [], history = [], budgetAmount } = useChallenge();

    // 초기 설정 및 상태관리
    const inputStartDate = budgets.length > 0 ? new Date(budgets[0].startDate) : new Date();
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(inputStartDate);
    const [weekDates, setWeekDates] = useState([]);
    const [balances, setBalances] = useState({});

    // 주간 날짜 계산
    useEffect(() => {
        const startOfWeek = getStartOfWeek(currentDate);
        setWeekDates(getWeekDates(startOfWeek));
    }, [currentDate]);

    // 지출 합계 및 잔액 계산
    useEffect(() => {
        const result = sumItemCostByDate(history);
        const calculatedBalances = calculateBalance(result, weekDates, budgetAmount);
        console.log('Calculated Balances:', calculatedBalances); // 디버깅 로그 추가
        setBalances(calculatedBalances);
    }, [history, weekDates, budgetAmount]);

    // 주 변경, 리셋 함수
    const changeWeek = (weeks) => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + weeks * 7);
        setCurrentDate(newDate);
    };

    const resetToCurrentWeek = () => {
        setCurrentDate(today);
    };

    // 날짜 범위, 제목
    const startOfWeek = getStartOfWeek(currentDate);
    const title = `${startOfWeek.getFullYear()}.${startOfWeek.getMonth() + 1}`;
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    const rangeTitle = endOfWeek.getMonth() !== startOfWeek.getMonth()
        ? `${title} - ${endOfWeek.getFullYear()}.${endOfWeek.getMonth() + 1}` : title;

    // 잔액 계산 함수
    // TODO: 0원이 되면 다시 최초예산으로 돌아가는 오류 수정 필요
    const calculateBalance = (result, weekDates, budgetAmount) => {
        let balance = budgetAmount;
        const updatedBalances = {};

        weekDates.forEach((weekDate) => {
            const dateKey = weekDate.date.toISOString().split("T")[0];
            const spentTotalCostToday = result[dateKey] || 0;
            balance -= spentTotalCostToday;
            // 디버깅 로그 추가
            console.log(`Date: ${dateKey}, Spent: ${spentTotalCostToday}, Balance: ${balance}`);
            updatedBalances[dateKey] = { spentTotalCostToday, balance };
        });

        return updatedBalances;
    };

    return (
        <>
            <div>TestWeek</div>
            <div>{rangeTitle}</div>
            <div>
                <button onClick={() => changeWeek(-1)} className='hover:bg-gray-300'>⬅️</button>
                <button onClick={() => resetToCurrentWeek()}>🔄️</button>
                <button onClick={() => changeWeek(1)} className='hover:bg-gray-300'>➡️</button>
            </div>
            <div className='flex justify-around'>
                {weekDates.map((item, index) => {
                    const dateKey = item.date.toISOString().split("T")[0];
                    const spentTotalCostToday = balances[dateKey]?.spentTotalCostToday || 0;
                    const balance = balances[dateKey]?.balance || budgetAmount;

                    return (
                        <TestDay
                            key={index}
                            date={item.date}
                            day={item.date.getDay()}
                            isToday={
                                item.date.getFullYear() === today.getFullYear() &&
                                item.date.getMonth() === today.getMonth() &&
                                item.date.getDate() === today.getDate()
                            }
                            spentTotalCostToday={spentTotalCostToday}
                            balance={balance}
                            budgetAmount={budgetAmount}
                            startDate={inputStartDate}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default TestWeek;
