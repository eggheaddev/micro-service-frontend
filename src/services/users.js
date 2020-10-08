function register(userInfo) {
    return fetch("/api/new_user", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => data)
}

function login(userInfo) {
    return fetch("/api/authorize", {
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
