import React from 'react'
import BudgetBody from './BudgetBody'

const Budget = ({ budget }) => {
  return (
    <div>
        <BudgetBody budget={budget}></BudgetBody>
    </div>
  )
}

export default Budget