export const budgetMessage = (progressPercentage) => {

  if (progressPercentage === 100) {
    return '챌린지 금액에 도달했어요! 이제는 지갑을 닫아두세요!!🚨'
  } else if (progressPercentage >= 70) {
    return '조금 더 아껴 써야겠어요! 🥹'
  } else if (progressPercentage >= 50) {
    return '아자아자 조금만 더 힘내 보아요!'
  } else if (progressPercentage >= 30) {
    return '이 기세 그대로 챌린지에 성공해 보아요!'
  } else {
    return '좋은 시작이에요! 이대로 계속 진행해 보세요!'
  }
};