async function createDayPlanAPI(food) {
    
    const result = await fetch('/api/food/newDayPlan', {
        method: 'POST',
        body: JSON.stringify(food),
        headers: {
            'Content-Type': 'application/json',
            token: window.localStorage.getItem("token"),
        }
    });
    const data = await result.json();

    return data;
}

export default createDayPlanAPI;