import React from 'react'
import { DummyData_Budget } from '../../constants/dummyData'

const TestDay = ({ date, day, isToday, spentTotalCostToday, balance }) => {
    // 배경색 선정
    const dayBackgroundColor = () => {
        const startDate = new Date(DummyData_Budget[0].startDate);
        const endDate = new Date(startDate)
        endDate.setDate(startDate.getDate() + 6)

        // date와 startDate 비교
        const start = new Date(startDate.toDateString());
        const end = new Date(endDate.toDateString());
        const current = new Date(date.toDateString());

        // TODO: balance 상태를 보고 음수가 되면 이후는 배경색이 변경되지 않도록 수정하기
        // TestWeek -> balance={item.balance || 0}
        if (start <= current <= end) {
            if (balance >= 0) { return 'bg-green-300' }
        }
    }

    // 일자 안내
    const checkToday = () => {
        return isToday ? 'border-8 border-indigo-600' : '';
    }

    // 일별 총 지출금액 기재
    const recordSpentTotalCostToday = spentTotalCostToday > 0 ? `-${spentTotalCostToday}` : '';

    // 최초 예산 수입금액 기재(startDate)
    const recordThisWeekBudget = date.toISOString().split('T')[0] === new Date(DummyData_Budget[0].startDate).toISOString().split('T')[0] ? DummyData_Budget[0].budgetAmount : '';

    return (
        <div className={`flex-1 text-center border-solid border-2 ${dayBackgroundColor()} ${checkToday()}`}>
            {/* TODO: date - day랑 date만 나오도록 변경하기 */}
            <div>{date.toDateString()}</div>
            <div>{recordThisWeekBudget > 0 ? `+${recordThisWeekBudget}` : ''}</div>
            <div>{recordSpentTotalCostToday}</div>
        </div>
    )
}

export default TestDay