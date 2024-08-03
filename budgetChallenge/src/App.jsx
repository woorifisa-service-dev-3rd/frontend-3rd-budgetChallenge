import { createPortal } from 'react-dom';
import Modal from './components/ui/Modal';
import BudgetForm from './components/budget/BudgetForm';
import DefaultLayout from './layouts/DefaultLayout';
import LeftBody from './layouts/LeftBody';
import RightBody from './layouts/RightBody';
import './App.css'
import { ChallengeProvider, useStore } from './contexts/ChallengeContext';

function App() {
  return (
    <ChallengeProvider>
      <AppContent />
    </ChallengeProvider>
  )
}

function AppContent() {
  const { openModal, closeModal, handleClick, initialDate, addBudgetHandler, budgets } = useStore();

  return (
    <>
      <DefaultLayout>
        <header onClick={handleClick}>
          <div>
            <a to="/" className='flex flex-col items-center'>
              <h1 className='py-4 max-w-max text-5xl'>Budget</h1>
              <h1 className='max-w-max text-5xl'>Challenge</h1>
            </a>
          </div>
        </header>
        <section className="h-screen m-0 py-8" onClick={handleClick}>
          <div className="flex h-full">
            <div className="w-1/2 bg-yellow-100 p-4">
              <LeftBody budgets={budgets}></LeftBody>
            </div>
            <div className="w-1/2 bg-green-200 p-4">
              <RightBody budgets={budgets}></RightBody>
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
    </>
  )
}

export default App
