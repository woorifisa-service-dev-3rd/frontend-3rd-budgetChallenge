export const budgetCheckHandler = (DummyData_Challenge) => {

    let challengeAmount = 0;

    if (DummyData_Challenge === '5만원 챌린지') {
        challengeAmount += 50000;
    } else if (DummyData_Challenge === '30만원 챌린지') {
        challengeAmount += 300000;
    } else if (DummyData_Challenge === '100만원 챌린지') {
        challengeAmount += 1000000;
    } else if (DummyData_Challenge === 'FLEX 챌린지') {
        challengeAmount += 5000000;
    }
    return challengeAmount
};