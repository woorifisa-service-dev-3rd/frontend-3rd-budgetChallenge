import React from 'react'
import Budget from '../components/budget/Budget'
import { useStore } from '../contexts/ChallengeContext';
import ChallengeBody from "../components/challenge/ChallengeBody";


const LeftBody = () => {

  const { budgets } = useStore();
  const budget = budgets[0] || {};

  return (
    <>
      <div className='h-40 bg-blue-200 mb-10'>
        {/* <ChallengeBody /> */}
      </div>
      <div className='h-4/6 bg-white'>
        <Budget budget={budget}></Budget>
      </div>
    </>
  )
}

export default LeftBody