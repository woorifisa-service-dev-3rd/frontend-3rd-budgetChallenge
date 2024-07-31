import React, { useEffect, useState } from 'react'
import { DummyData_History } from '../dummyData'
import { budgetMessage } from './budgetMessage';

const BudgetCalculator = ({ goal, formatCurrency }) => {

  const [sum, setSum] = useState(goal);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    const sumCalculateHandler = () => {
      let expense = 0;
      DummyData_History.map(item => {
        const itemCost = parseFloat(item.itemCost);
        expense += itemCost;
      });

      setSum(sum - expense);
      setExpense(expense);
    };

    sumCalculateHandler();
  }, [goal]);

  // 소비 진행 비율 계산
  const progressPercentage = Math.min((expense / goal) * 100, 100);
  const message = budgetMessage(progressPercentage);

  return (
    <>
      <div className='space-x-20'>
        <span>지출</span>
        <span>{formatCurrency(expense)}원</span>
      </div>
      <div>
        <div className='mt-4'>
          <div className='w-11/12 bg-gray-300 rounded-md overflow-hidden my-5 ml-6'>
            <div
              className='bg-teal-400 text-white text-center text-sm font-semibold h-6 flex items-center justify-center rounded-md'
              style={{ width: `${progressPercentage}%` }}
            >
              {Math.round(progressPercentage)}%
            </div>
          </div>
        </div>
        <div className='space-x-16'>
          <span>남은 예산</span>
          <span>{formatCurrency(sum)}원</span>
        </div>
        <div>{message}</div>
      </div>
    </>
  )
};

export default BudgetCalculator