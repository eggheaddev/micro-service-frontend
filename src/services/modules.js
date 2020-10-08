function getModules() {
    return fetch("/api/storage/packages")
        .then(res => res.json())
        .then(data => data)
}

function getModule(module) {
    return fetch("/api/storage/package", {
        method: "POST",
        body: JSON.stringify({name: module }),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(data => data.json())
}

export { getModules, getModule }
