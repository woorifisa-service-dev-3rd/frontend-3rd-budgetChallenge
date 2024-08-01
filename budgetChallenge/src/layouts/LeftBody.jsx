import React from 'react'
import Budget from '../components/budget/Budget'
import { useStore } from '../contexts/ChallengeContext';

const LeftBody = ({ budgets }) => {

  const {data, _ } = useStore();
  console.log('data', data); // 날짜값

  const budget = budgets[0] || {};

  return (
    <>
    <div className='h-40 bg-blue-200 mb-10'>
      Challenge
    </div>
      <div className='h-4/6 bg-white'>
        <Budget budget={budget}></Budget>
      </div>
    </>
  )
}

export default LeftBody