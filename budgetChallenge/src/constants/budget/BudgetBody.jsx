import React, { useState } from 'react'
import { DummyData_History } from '../dummyData'
import { DummyData_Challenge } from '../dummyData'
import { budgetCheckHandler } from './budgetCheckHandler'
import BudgetCalculator from './BudgetCalculator'

const BudgetBody = () => {

    const challengeAmount = budgetCheckHandler(DummyData_Challenge);

    return (
        <>
            <div className="space-y-16">
                <div className="space-x-48">
                    <span>예산</span>
                    <span>{challengeAmount}</span>
                </div>
                <div>
                    <BudgetCalculator goal={challengeAmount}></BudgetCalculator>
                </div>
                <div>메시지</div>
            </div>
        </>
    )
}

export default BudgetBody