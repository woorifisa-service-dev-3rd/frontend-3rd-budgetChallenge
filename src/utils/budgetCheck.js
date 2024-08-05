export const budgetCheck = (budgetName) => {

    let budgetAmount = 0;

    if (budgetName === '5만원 챌린지') {
        budgetAmount += 50000;
    } else if (budgetName === '30만원 챌린지') {
        budgetAmount += 300000;
    } else if (budgetName === '100만원 챌린지') {
        budgetAmount += 1000000;
    } else if (budgetName === 'FLEX 챌린지') {
        budgetAmount += 9999999999;
    }
    return budgetAmount
};