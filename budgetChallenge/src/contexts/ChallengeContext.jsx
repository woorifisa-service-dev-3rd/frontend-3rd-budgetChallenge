import { budgetCheck } from '../components/budget/budgetCheck'
// import { DummyData_History } from '../constants/dummyData'
import { createContext, useContext, useState, useEffect } from "react";

// 컨텍스트 생성
export const ChallengeContext = createContext();

export const useStore = () => useContext(ChallengeContext);

export const ChallengeProvider = ({children}) => {
    const [openModal, setOpenModal] = useState(false);
    const [isModalClosed, setIsModalClosed] = useState(false); // 모달창이 닫힌 뒤로 열리지 않게 함
    const [initialDate, setInitialDate] = useState('');
    const [budgets, setBudgets] = useState([{budgetAmount: 50000}]);
    const [history, setHistory] = useState([]);
  
    const closeModal = () => {
      setOpenModal(false);
      setIsModalClosed(true);
    }
  
    const handleClick = () => {
      if (!isModalClosed) {
        setOpenModal(true);
      }
    }
  
    // 모달창의 날짜 입력 폼에 오늘 날짜를 띄우기 위한 함수
    const getTodayDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`
    }
  
    useEffect(() => {
      setInitialDate(getTodayDate());
    }, []);
    
    // 날짜 포맷팅 함수
    const formatDate = (date) => {
      const [year, month, day] = date.split('-');
      return `${year}/${month.padStart(2, '0')}/${day.padStart(2, '0')}`;
    }
  
    // 예산 객체 추가 핸들러
    const addBudgetHandler = ({ budgetTitle, startDate }) => {
      const budgetAmount = budgetCheck(budgetTitle);
      const formattedDate = formatDate(startDate);
  
      const newBudget= {
        id: self.crypto.randomUUID(),
        budgetTitle,
        budgetAmount,
        startDate: formattedDate
      }
      setBudgets([newBudget]);
    }

    return (
        <ChallengeContext.Provider value={{openModal, closeModal, handleClick, initialDate, budgets, addBudgetHandler, history, setHistory }}>
            {children}
        </ChallengeContext.Provider>
    )
}