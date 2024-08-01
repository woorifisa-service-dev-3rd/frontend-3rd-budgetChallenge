// 날짜별 지출 항목의 비용을 합산한 객체
export const sumItemCostByDate = (data) => {
    const result = {}; // key: id, value: sumItemCost, Date

    for (let i = 0; i < data.length; i++) {
        const item = data[i]
        const dateKey = item.date.toISOString().split("T")[0]; // yyy-mm-dd

        if (!result[dateKey]) {
            result[dateKey] = 0; // 해달 날짜 키가 없으면 초기화
        }
        result[dateKey] += item.itemCost; // 지출 비용 누적

    }
    return result;
}