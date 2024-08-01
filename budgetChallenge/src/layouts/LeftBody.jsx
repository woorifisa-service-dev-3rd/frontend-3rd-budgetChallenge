import React from 'react'
import Budget from '../constants/budget/Budget'

const LeftBody = ({ budgets }) => {

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