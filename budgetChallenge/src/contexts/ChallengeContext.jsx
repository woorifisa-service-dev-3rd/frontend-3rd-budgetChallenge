import React, { createContext, useContext, useState } from 'react';

const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
    const [data, setData] = useState([]); // 초기 상태와 업데이트 함수 정의

    return (
        <ChallengeContext.Provider value={{ data, setData }}>
            {children}
        </ChallengeContext.Provider>
    );
};

export const useStore = () => useContext(ChallengeContext);
