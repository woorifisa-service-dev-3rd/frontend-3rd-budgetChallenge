import React from 'react'
import Budget from '../components/budget/Budget'
import { useStore } from '../contexts/ChallengeContext';

const LeftBody = ({ budgets }) => {

  const { data, _ } = useStore();
  console.log('data', data); // 날짜값

  const budget = budgets[0] || {};

  return (
    <div>LeftBody</div>
  )
}

export default LeftBody;
