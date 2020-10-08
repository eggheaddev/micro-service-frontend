function register(userInfo) {
    return fetch("https://api-hostify-service.herokuapp.com/api/new_user", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => data)
}

function login(userInfo) {
    return fetch("https://api-hostify-service.herokuapp.com/api/authorize", {
        method: "POST",
        body: JSON.stringify(userInfo),
        credentials: "same-origin",
        headers: {
            'Accept':  'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => data)
}

export { register, login }
