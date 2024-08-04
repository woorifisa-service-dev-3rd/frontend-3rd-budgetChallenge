import React from 'react'
import BudgetBody from './BudgetBody'
import { useChallenge } from '../../contexts/ChallengeContext'

const Budget = () => {
  const { budgets } = useChallenge();
  const budget = budgets.length > 0 ? budgets[0] : { budgetAmount: 0 };

  return (
    <div>
      <BudgetBody budget={budget}></BudgetBody>
    </div>
  );
};

export default Budget