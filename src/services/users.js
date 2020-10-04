function register(userInfo) {
    return fetch("/api/", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => console.log(data))
}

function login(userInfo) {
    return fetch("/api/", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => console.log(data))
}

export default { register, login }
