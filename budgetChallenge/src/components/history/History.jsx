import React from 'react';
import HistoryBody from './HistoryBody';
import HistoryHeader from './HistoryHeader';
import { useChallenge } from '../../contexts/ChallengeContext';

const History = () => {
  const { history, addHistory } = useChallenge();

  const addHistoryFormHandler = ({ date, miniText, itemName, itemCost }) => {
    const newHistory = {
      id: window.crypto.randomUUID(),
      date,
      miniText,
      itemName,
      itemCost
    };

    addHistory(newHistory);
  };

  return (
    <div>
      <h2>사용내역</h2>
      <HistoryHeader onAdd={addHistoryFormHandler} />
      <HistoryBody historyforms={history} />
    </div>
  );
};

export default History;
