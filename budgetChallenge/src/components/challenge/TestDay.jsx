import React from 'react';

// TestDay.jsx
const TestDay = ({ date, day, isToday, spentTotalCostToday, balance, budgetAmount, startDate }) => {
    console.log('TestDay - Date:', date);
    console.log('TestDay - Spent Total Cost Today:', spentTotalCostToday);
    console.log('TestDay - Balance:', balance);

    // 배경색 선정
    const dayBackgroundColor = () => {
        const start = new Date(startDate.toDateString());
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        const current = new Date(date.toDateString());

        // 날짜가 범위 내에 있는지 확인
        if (current >= start && current <= end) {
            return balance >= 0 ? 'bg-green-300' : 'bg-red-300';
        }
        return ''; // 범위 밖일 경우 배경색 없음
    };

    // 오늘 날짜 확인
    const checkToday = () => {
        return isToday ? 'border-8 border-indigo-600' : '';
    };

    // 일별 총 지출금액 기재
    const recordSpentTotalCostToday = spentTotalCostToday > 0 ? `-${spentTotalCostToday}` : '';

    // 최초 예산 수입금액 기재(startDate)
    const recordThisWeekBudget = date.toISOString().split('T')[0] === startDate.toISOString().split('T')[0]
        ? `+${budgetAmount}`
        : '';

    return (
        <div className={`flex-1 text-center border-solid border-2 ${dayBackgroundColor()} ${checkToday()}`}>
            <div>{date.toDateString()}</div>
            <div>{recordThisWeekBudget}</div>
            <div>{recordSpentTotalCostToday}</div>
        </div>
    );
};

export default TestDay;
