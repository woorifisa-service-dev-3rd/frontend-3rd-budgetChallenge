import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './components/ui/Modal';
import BudgetForm from './components/budget/BudgetForm';
import DefaultLayout from './layouts/DefaultLayout';
import LeftBody from './layouts/LeftBody';
import RightBody from './layouts/RightBody';
import './App.css'
// import History from './components/history/History'
import { ChallengeProvider, useChallenge } from './contexts/ChallengeContext';
import ChallengeTitle from './components/challenge/ChallengeTitle';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(false); // 모달창이 닫힌 뒤로 열리지 않게 함
  const [initialDate, setInitialDate] = useState('');

  const closeModal = () => {
    setOpenModal(false);
    setIsModalClosed(true);
  }

  const handleClick = () => {
    if (!isModalClosed) {
      setOpenModal(true);
    }
  }

  // 모달창의 날짜 입력 폼에 오늘 날짜를 띄우기 위한 함수
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`
  }

  useEffect(() => {
    setInitialDate(getTodayDate());
  }, []);

  const addHistoryHandler = (history) => {
    addHistoryHandler(history);
  }

  const addBudgetHandler = ({ budgetTitle, startDate }) => {
    addBudget(budgetTitle, startDate);
  }


  return (
    <ChallengeProvider>
      <DefaultLayout>
        <header onClick={handleClick}>
          <div className='flex flex-col items-center'>
              <h1 className='py-4 max-w-max text-5xl'>Budget</h1>
              <h1 className='max-w-max text-5xl'>Challenge</h1>
          </div>
        </header>

        <section className="h-screen m-0 py-8" onClick={handleClick}>
          <ChallengeTitle />
          <div className="flex h-full">
            <div className="w-1/2 bg-yellow-100 p-4">
              <LeftBody />
            </div>
            <div className="w-1/2 bg-green-200 p-4">
              <RightBody onAddHistory={addHistoryHandler} />
            </div>
          </div>
        </section>

        {/* 모달창 호출 부분 */}
        {openModal && createPortal(
          <Modal onClose={closeModal}>
            <BudgetForm onClose={closeModal} initialDate={initialDate} onAdd={addBudgetHandler}>
              Enter Budget
            </BudgetForm>
          </Modal>,
          document.body)}
      </DefaultLayout>
    </ChallengeProvider>
  )
}

export default App
