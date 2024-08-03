import React, { useEffect, useState } from 'react'
import HistoryBody from './HistoryBody'
import HistoryHeader from './HistoryHeader'
import { DummyData_History } from '../../constants/dummyData'
import { useStore } from '../../contexts/ChallengeContext'

const History = () => {
  const { history, setHistory } = useStore();
  const [historyforms, setHistoryforms] = useState(history);

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
    setHistory(updatedHistory);
  }
  console.log(history);

  return (
    <div>
      <h2>사용내역</h2>
      <HistoryHeader onAdd={addHistoryFormoHandler}/>
      <HistoryBody historyforms={historyforms}/>
    </div>
  )
}

export default History