import React, { useEffect, useState } from 'react'
import { useChallenge } from '../../contexts/ChallengeContext';

const BudgetForm = ({ initialDate, onAdd, onClose, onValueSelect }) => {
  const [budgetTitle, setBudgetTitle] = useState('무지출 챌린지');
  const [startDate, setStartDate] = useState(initialDate);

  // Context에서 선택된 값을 설정합니다.
  const { setSelectedDate, setBudgetTitle: setContextBudgetTitle, addBudget } = useChallenge();

  useEffect(() => {
    setStartDate(initialDate);
  }, [initialDate]);

  const addBudgetHandler = () => {
    addBudget(budgetTitle, startDate); // Context에 예산 추가
    setSelectedDate(startDate);
    setContextBudgetTitle(budgetTitle);
    onValueSelect && onValueSelect({ budgetTitle, startDate }); // 콜백 호출
    onClose();
  }

  return (
    <>
      <h2 className='text-4xl text-center text-white font-extrabold'>1 WEEK CHALLENGE</h2>
      <form className='my-2'>
        <div>
          <label className='block mb-2 text-xl text-white font-bold' htmlFor="budgetTitle">챌린지</label>
          <select className='w-full p-3 border-orange-200 bg-orange-100 text-gray-900 rounded' id="budgetTitle"
            value={budgetTitle} onChange={event => setBudgetTitle(event.target.value)}>
            <option value="무지출 챌린지">무지출 챌린지</option>
            <option value="5만원 챌린지">5만원 챌린지</option>
            <option value="30만원 챌린지">30만원 챌린지</option>
            <option value="100만원 챌린지">100만원 챌린지</option>
            <option value="FLEX 챌린지">FLEX 챌린지</option>
          </select>
        </div>
        <div className='my-5'>
          <label className='block mb-2 text-xl text-white font-bold' htmlFor="startDate">시작날짜</label>
          <input className="w-full px-3 py-2 border border-orange-200 bg-orange-100 rounded-md shadow-sm focus:outline-none focus:border-orange-300" type="date" id="startDate"
            value={startDate} onChange={event => setStartDate(event.target.value)} />
        </div>
      </form>
      <button className='w-full my-3 bg-orange-400 text-white px-4 py-2 rounded-md shadow-sm hover:bg-orange-500' onClick={addBudgetHandler}>GO</button>
    </>
  )
}

export default BudgetForm