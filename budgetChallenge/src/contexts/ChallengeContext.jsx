import { createContext, useContext, useState } from "react";

export const DummyData_History = [
    {
        id: 1,
        date: '2024-07-31',
        miniText: '식사',
        itemName: '샌드위치',
        itemCost: '5000'
    },
    {
        id: 2,
        date: '2024/08/01',
        mini_Text: '쇼핑',
        itemName: '반팔티',
        itemCost: '40000'
    },
]

export const DummyData_Budget = [
    {
        id: 1,
        budgetTitle: "5만원 챌린지",
        budgetAmount: 50000,
        startDate: "2024/07/29",
    },
];


// 컨텍스트 생성
export const ChallengeContext = createContext();

export const useStore = () => useContext(ChallengeContext);

export const ChallengeProvider = ({children}) => {
    const [data, setData] = useState(DummyData_History);

    return (
        <ChallengeContext.Provider value={{data, setData}}>
            {children}
        </ChallengeContext.Provider>
    )
}