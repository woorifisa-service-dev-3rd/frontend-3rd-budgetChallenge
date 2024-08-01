import React, { useState } from 'react'
import HistoryBody from './HistoryBody'
import HistoryHeader from './HistoryHeader'
import { DummyData_History } from '../../constants/dummyData'

const History = () => {
  const [historyforms, setHistoryforms] = useState(DummyData_History);

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
  }
  

  return (
    <div>
      <h2>사용내역</h2>
      <HistoryHeader onAdd={addHistoryFormoHandler}/>
      <HistoryBody historyforms={historyforms}/>
    </div>
  )
}

export default History