import React from 'react';
import { useChallenge } from '../../contexts/ChallengeContext';

const ChallengeTitle = () => {
  const { budgetTitle } = useChallenge(); // ChallengeContext에서 budgetTitle 가져오기

  return (
    <h2>{budgetTitle || "Default Title"}</h2> // budgetTitle이 없으면 Default Title을 표시
  );
};

export default ChallengeTitle;
