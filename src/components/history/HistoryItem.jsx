import React from 'react'

const HistoryItem = ({ historyform }) => {
  return (
    <div>
      <p>{historyform.date}</p>
      <h4>{historyform.miniText}</h4>
      <p>{historyform.itemName}</p>
      <p>{historyform.itemCost}</p>
    </div>
  )
}

export default HistoryItem