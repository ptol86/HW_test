
const baseUrl = "https://5ef08e01ad6d71001617a596.mockapi.io/api/v1/clients";

export const createNewClient = taskData => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(taskData),
    }).then(response => {
        if (!response.ok) {
            throw new Error("Failed to create new client")
        } 
    })
}

export const fetchClientsList = () => {
    return fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Failed to fetch clients list")
        })
}


