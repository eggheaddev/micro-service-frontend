function getModules() {
    return fetch("/api/storage/packages")
        .then(res => res.json())
        .then(data => data)
}

function getModule(module) {
    return fetch("/api/storage/package", {
        method: "GET",
        body: JSON.stringify(module),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => data.package)
}

export  { getModules, getModule}
