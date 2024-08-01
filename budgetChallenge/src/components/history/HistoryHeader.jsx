import React, { useState } from 'react'
import HistoryForm from './HistoryForm'

const HistoryHeader = ({onAdd}) => {
  const [showForm, setShowForm] = useState(false);
  const closeForm = () => setShowForm(false);

  return (
    <div>
      <button className="rounded-full bg-blue-500 text-white p-2" onClick={() => setShowForm(true)}>
        사용 내역 작성하기
      </button>
      {showForm && <HistoryForm onAdd={onAdd} onClose={closeForm}/>}
    </div>
  );
}

export default HistoryHeader