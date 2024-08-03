import React, { useState } from 'react'
import HistoryBody from './HistoryBody'
import HistoryHeader from './HistoryHeader'
import { useStore } from '../../contexts/ChallengeContext'

const History = ({ onAddHistory }) => {
  const [historyforms, setHistoryforms] = useState([]);
  const { setData } = useStore();

  const addHistoryFormHandler = ({ date, miniText, itemName, itemCost }) => {
    const newHistory = {
      id: window.crypto.randomUUID(),
      date,
      miniText,
      itemName,
      itemCost
    }

    const updatedHistory = [...historyforms, newHistory];
    setHistoryforms(updatedHistory);

    if (typeof setData === 'function') {
      setData(updatedHistory);
    } else {
      console.log('setData is not a function');
    }

    if (onAddHistory) {
      onAddHistory(updatedHistory);
    }
  };

  console.log(historyforms);

  return (
    <div>
      <h2>사용내역</h2>
      <HistoryHeader onAdd={addHistoryFormHandler} />
      <HistoryBody historyforms={historyforms} />
    </div>
  )
}

export default History