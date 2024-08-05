import React, { createContext, useContext, useState } from 'react';
import { budgetCheck } from "../utils/budgetCheck";

const ChallengeContext = createContext();

// 첫 화면에 보일 더미데이터 설정
export const ChallengeProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [budgetTitle, setBudgetTitle] = useState("5만원 챌린지");
    const [budgetAmount, setBudgetAmount] = useState(50000);
    const [budgets, setBudgets] = useState([
        { id: 1, budgetTitle: '5만원 챌린지', budgetAmount: 50000, startDate: '2024-07-29' }
    ]);
    const [history, setHistory] = useState([
        { id: 1, date: '2024-07-30', miniText: '간식', itemName: '신당동 떡볶이', itemCost: 1500 },
        { id: 2, date: '2024-07-31', miniText: '쇼핑', itemName: '반팔티', itemCost: 20000 },
        { id: 3, date: '2024-08-02', miniText: '식사', itemName: '짜글이', itemCost: 13000 },
    ]);

    const [isDummyData, setIsDummyData] = useState(true);

    // 예산 추가 함수
    const addBudget = (title, startDate) => {
        const amount = budgetCheck(title); // 예산 금액 계산
        console.log(`Adding budget with title: ${title}, startDate: ${startDate}, amount: ${amount}`);
        setBudgetAmount(amount);
        setBudgetTitle(title);
        setBudgets([{ id: window.crypto.randomUUID(), budgetTitle: title, budgetAmount: amount, startDate }]);
        setIsDummyData(false);
    };

    // 사용기록 추가 함수
    const addHistory = (newHistory) => {
        setHistory(prevHistory => {
            const updatedHistory = [...prevHistory, newHistory];
            console.log('Updated history in Context:', updatedHistory);
            return updatedHistory;
        });
    };

    // 모달창 입력시 더미데이터 초기화 함수
    const resetDummyData = () => {
        setHistory([]);
        setBudgetTitle('');
        setBudgetAmount(0);
        setBudgets([]);
    };

    return (
        <ChallengeContext.Provider value={{ selectedDate, setSelectedDate, budgetTitle, setBudgetTitle, budgetAmount, setBudgetAmount, budgets, setBudgets, history, addBudget, addHistory, isDummyData, resetDummyData }}>
            {children}
        </ChallengeContext.Provider>
    );
};

export const useChallenge = () => useContext(ChallengeContext);