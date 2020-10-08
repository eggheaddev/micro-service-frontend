function getModules() {
    return fetch("https://api-hostify-service.herokuapp.com/api/storage/packages")
        .then(res => res.json())
        .then(data => data)
}

function getModule(module) {
    return fetch("https://api-hostify-service.herokuapp.com/api/storage/package", {
        method: "POST",
        body: JSON.stringify({name: module }),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(data => data.json())
}

export { getModules, getModule }
