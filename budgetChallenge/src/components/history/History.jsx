import React, { useState } from 'react'
import HistoryBody from './HistoryBody'
import HistoryHeader from './HistoryHeader'
import { DummyData_History } from '../../constants/dummyData'
import { useStore } from '../../contexts/ChallengeContext'

const History = ({ onAddHistory }) => {
  const [historyforms, setHistoryforms] = useState(DummyData_History);

  const { _, setData } = useStore();

  const addHistoryFormoHandler = ({ date, miniText, itemName, itemCost }) => {

    const newHistory = {
      id: self.crypto.randomUUID(),
      date,
      miniText,
      itemName,
      itemCost
    }

    const updatedHistory = [...historyforms, newHistory];
    setHistoryforms(updatedHistory);
    // onAddHistory(updatedHistory);
    setData(updatedHistory);
  }

  console.log(historyforms);

  return (
    <div>
      <h2>사용내역</h2>
      <HistoryHeader onAdd={addHistoryFormoHandler} />
      <HistoryBody historyforms={historyforms} />
    </div>
  )
}

export default History