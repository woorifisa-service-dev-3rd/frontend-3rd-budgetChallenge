import React, { createContext, useContext, useState } from 'react';
import { budgetCheck } from "../utils/budgetCheck";

const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [budgetTitle, setBudgetTitle] = useState("");
    const [budgetAmount, setBudgetAmount] = useState(0);
    const [budgets, setBudgets] = useState([]);
    const [history, setHistory] = useState([]);

    // 예산 추가 함수
    const addBudget = (title, startDate) => {
        const amount = budgetCheck(title); // 예산 금액 계산
        // 예산이 변경될 때만 업데이트
        if (amount !== budgetAmount) {
            setBudgetAmount(amount);
        }
        setBudgetTitle(title);
        setBudgets([{ id: window.crypto.randomUUID(), budgetTitle: title, budgetAmount: amount, startDate }]);
    };

    // 사용기록 추가 함수
    const addHistory = (newHistory) => {
        setHistory(prevHistory => {
            const updatedHistory = [...prevHistory, newHistory];
            console.log('Updated history in Context:', updatedHistory);
            return updatedHistory;
        });
    };

    return (
        <ChallengeContext.Provider value={{ selectedDate, setSelectedDate, budgetTitle, setBudgetTitle, budgetAmount, setBudgetAmount, budgets, setBudgets, history, addBudget, addHistory }}>
            {children}
        </ChallengeContext.Provider>
    );
};

export const useChallenge = () => useContext(ChallengeContext);
