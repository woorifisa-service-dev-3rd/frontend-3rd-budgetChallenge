import React, { useState } from 'react'
import BudgetCalculator from './BudgetCalculator'

const BudgetBody = ({ budget }) => {

    // 금액 포맷팅하는 함수 (금액에 쉼표 넣기)
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount);
    }

    return (
        <>
            <div className="space-y-16">
                <div className="space-x-48">
                    <span>예산</span>
                    <span>{formatCurrency(budget.budgetAmount)}원</span>
                </div>
                <div>
                    <BudgetCalculator budgetAmount={budget.budgetAmount} formatCurrency={formatCurrency}></BudgetCalculator>
                </div>
            </div>
        </>
    )
}

export default BudgetBody