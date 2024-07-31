import React, { useEffect, useState } from 'react'
import { DummyData_History } from '../dummyData'

const BudgetCalculator = ({ goal }) => {

    const [sum, setSum] = useState(0);

    const sumCalculateHandler = () => {
        
        // 각 itemCost를 itemCosts 배열에 넣기
        const itemCosts = DummyData_History.map(item => parseFloat(item.itemCost));
        console.log('Item Costs: ', itemCosts);
        return goal;
    };

  return (
    <div className='space-x-20'>
        <span>지출</span>
        <span>{sumCalculateHandler()}</span>
    </div>
  )
}

export default BudgetCalculator