// 날짜별 지출 항목의 비용을 합산한 객체
export const sumItemCostByDate = (data) => {
    const result = {}; // key: date, value: sumItemCost

    for (let i = 0; i < data.length; i++) {
        const item = data[i]
        const date = (item.date instanceof Date) ? item.date : new Date(item.date);
        // const dateKey = item.date.toISOString().split("T")[0]; // yyyy-mm-dd

        // 날짜가 유효한지 확인
        if (isNaN(date.getTime())) {
            throw new Error(`Invalid date: ${item.date}`);
        }

        const dateKey = date.toISOString().split("T")[0]; // yyyy-mm-dd

        if (!result[dateKey]) {
            result[dateKey] = 0; // 해달 날짜 키가 없으면 초기화
        }

        // itemCost를 숫자로 변환
        const itemCost = parseFloat(item.itemCost);
        if (isNaN(itemCost)) {
            throw new Error(`Invalid itemCost: ${item.itemCost}`);
        }

        result[dateKey] += itemCost; // 지출 비용 누적
    }
    return result;
}