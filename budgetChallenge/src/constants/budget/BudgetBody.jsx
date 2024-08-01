import React, { useState } from 'react'
import { DummyData_History } from '../dummyData'
import { DummyData_Challenge } from '../dummyData'
import { budgetCheckHandler } from './budgetCheckHandler'
import BudgetCalculator from './BudgetCalculator'

const BudgetBody = () => {

    // 금액 포맷팅하는 함수 (금액에 쉼표 넣기)
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount);
    }

    const challengeAmount = budgetCheckHandler(DummyData_Challenge);

    return (
        <>
            <div className="space-y-16">
                <div className="space-x-48">
                    <span>예산</span>
                    <span>{formatCurrency(challengeAmount)}원</span>
                </div>
                <div>
                    <BudgetCalculator goal={challengeAmount} formatCurrency={formatCurrency}></BudgetCalculator>
                </div>
            </div>
        </>
    )
}

export default BudgetBody