import React, { useState } from 'react'
import { parse, format } from 'date-fns';
import { useChallenge } from '../../contexts/ChallengeContext';

const HistoryForm = ({ onClose }) => {
    const [date, setDate] = useState('');
    const [miniText, setMiniText] = useState('');
    const [itemName, setItemName] = useState('');
    const [itemCost, setItemCost] = useState('');

    const { addHistory } = useChallenge();

    const handleChange = (event) => {
        const newDate = parse(event.target.value, 'yyyy-MM-dd', new Date());
        setDate(format(newDate, 'yyyy-MM-dd'));
    };

    const handleSubmit = () => {
        const newHistory = {
            id: window.crypto.randomUUID(),
            date,
            miniText,
            itemName,
            itemCost: parseFloat(itemCost) || 0
        };
        addHistory(newHistory)
        onClose();
    }


    // const addHistoryFormoHandler = () => {
    //     const newHistory = { date, miniText, itemName, itemCost };
    //     onAdd(newHistory);
    //     closeFormHandler();
    // }
    // const closeFormHandler = () => {
    //     onClose();
    // }

    return (
        <div className='border-2'>
            <div>
                <p>date</p>
                <input type='date' id='date' value={date} onChange={handleChange} />
            </div>
            <div>
                <p>miniText</p>
                <input type='text' id='miniText' value={miniText} onChange={event => setMiniText(event.target.value)} />
            </div>
            <div>
                <p>itemName</p>
                <input type='text' id='itemName' value={itemName} onChange={event => setItemName(event.target.value)} />
            </div>
            <div>
                <p>itemCost</p>
                <input type='text' id='itemCost' value={itemCost} onChange={event => setItemCost(event.target.value)} />
            </div>
            <div className='flex justify-end gap-4'>
                <button onClick={onClose}>취소하기</button>
                <button onClick={handleSubmit}>저장하기</button>
            </div>
        </div>
    )
}

export default HistoryForm