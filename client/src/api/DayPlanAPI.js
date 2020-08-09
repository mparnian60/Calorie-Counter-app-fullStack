//Create new dayplan
export async function createDayPlanAPI(food) {
    
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

//Update dayPlan
export async function upadteDayPlanAPI(food) {
    
    const result = await fetch('/api/food/updateDayPlan', {
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

//Get dayPlan
export async function getDayPlanAPI(food) {
    
    const result = await fetch('/api/food/dayPlan', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            token: window.localStorage.getItem("token"),
        }
    });
    const data = await result.json();

    return data;
}
