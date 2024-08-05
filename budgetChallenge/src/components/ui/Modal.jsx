import React from 'react'
import { useChallenge } from '../../contexts/ChallengeContext';

const Modal = ({ children, onClose }) => {
  const { setSelectedDate, setBudgetTitle } = useChallenge();

  const handleValueSelection = (value) => {
    setSelectedDate(value.startDate); // startDate를 업데이트
    setBudgetTitle(value.budgetTitle); // budgetTitle을 업데이트
    console.log('Modal selected value:', value); // 여기서 값 확인
    if (onClose) onClose();
  };

  return (
    <>
      <div data-cy="modal-backdrop" className='fixed top-0 left-0 w-full h-full backdrop-blur-md z-1'></div>
      <div className='fixed z-10 w-1/2 p-8 m-0 transform -translate-x-1/2 -translate-y-1/2 border-none rounded-2xl shadow-xl top-1/2 left-1/2 bg-orange-300'>
        {React.cloneElement(children, { onValueSelect: handleValueSelection })}
      </div>
    </>
  )
}

export default Modal