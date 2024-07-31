import React from 'react'
import Budget from '../constants/budget/Budget'

const LeftBody = () => {
  return (
    <>
    <div className='h-40 bg-blue-200 mb-10'>
      Challenge
    </div>
      <div className='h-4/6 bg-white'>
        <Budget ></Budget>
      </div>
    </>
  )
}

export default LeftBody