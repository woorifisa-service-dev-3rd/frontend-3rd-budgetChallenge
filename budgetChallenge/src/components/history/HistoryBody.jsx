import React from 'react'
import HistoryItem from './HistoryItem'

const HistoryBody = ({historyforms}) => {
  return (
    <div className='border-2'>
        {historyforms.map(historyform => <HistoryItem historyform={historyform} key={historyform.id}/>)}
    </div>
  )
}

export default HistoryBody