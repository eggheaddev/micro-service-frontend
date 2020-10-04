function getPackages() {
    return fetch("/api/storage/packages")
        .then(res => res.json())
        .then(data => data)
}

function getPackage(packageName) {
    return fetch("/api/storage/package", {
        method: "GET",
        body: JSON.stringify(packageName),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => data.package)
}

export  { getPackages, getPackage }
