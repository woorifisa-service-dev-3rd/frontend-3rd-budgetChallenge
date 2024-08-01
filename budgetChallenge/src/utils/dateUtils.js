// 캘린더의 시작 주 정하기
export const getStartOfWeek = (date) => {
    const day = new Date(date)
    const dayOfWeek = day.getDay() // 0:일, 1:월 ...
    const startOfWeek = new Date(day)

    // 한 주의 시작을 월요일로 하기
    if (dayOfWeek === 0) {
        startOfWeek.setDate(day.getDate() - 6) // 일요일이라면 이전 주의 월요일로 설정
    } else {
        startOfWeek.setDate(day.getDate() - dayOfWeek + 1) // 그외는 이번 주 월요일로 설정
    }

    // 시작일은 현재 날짜 - 요일
    // 2024.8.1(목) - 4 + 1 = 7.29(월)
    return startOfWeek
}

// 캘린더의 일주일 간의 날짜 반환하기
export const getWeekDates = (startOfWeek) => {
    const dates = [] // 날짜 객체를 저장하는 배열
    const date = new Date(startOfWeek)

    for (let i = 0; i < 7; i++) {
        dates.push({ date: new Date(date) }) // push: 객체에 값을 넣어주는 것
        date.setDate(date.getDate() + 1);
    }

    return dates; // 일주일 간의 날짜 객체 배열 반환
}