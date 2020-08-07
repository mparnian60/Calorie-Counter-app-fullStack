export async function loginAPI(userDeatils) {
    const result = await fetch('/user/login', {
        method: 'POST',
        body: JSON.stringify(userDeatils),
        headers: {
            'Content-Type': 'application/json',
            // token: window.localStorage.getItem("token"),
        }
    });
    const data = await result.headers.get('token');

    return data;
}