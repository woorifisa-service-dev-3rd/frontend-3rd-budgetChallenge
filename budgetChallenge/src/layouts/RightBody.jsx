import React from 'react'
import History from '../components/history/History'

const RightBody = ({ onAddHistory }) => {
  return (
    <History onAddHistory={onAddHistory}/>
  )
}

export default RightBody