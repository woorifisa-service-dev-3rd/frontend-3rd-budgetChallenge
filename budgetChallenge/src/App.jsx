import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './components/ui/Modal';
import BudgetForm from './components/budget/BudgetForm';
import { budgetCheck } from './components/budget/budgetCheck';
import DefaultLayout from './layouts/DefaultLayout';
import LeftBody from './layouts/LeftBody';
import RightBody from './layouts/RightBody';
import './App.css'
import History from './components/history/History'
import { ChallengeProvider } from './contexts/ChallengeContext';

function App() {

  return (
    <>
      <DefaultLayout>
        <header onClick={handleClick}>
          <div>
            <a to="/" className="flex flex-col items-center">
              <h1 className="py-4 max-w-max text-5xl">Budget</h1>
              <h1 className="max-w-max text-5xl">Challenge</h1>
            </a>
          </div>
        </header>
        <section className="h-screen m-0 py-8">
          <div className="flex h-full">
            <div className="w-1/2 bg-yellow-100 p-4">
              <LeftBody></LeftBody>
            </div>
            <div className="w-1/2 bg-green-200 p-4">
              <RightBody></RightBody>
            </div>
          </div>
        </section>

      </DefaultLayout>
    </>
  );
}

export default App;
