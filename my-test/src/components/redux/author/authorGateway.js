
const baseUrl = "https://api.github.com/users/ptol86";

export const fetchAuthorData = () => {
  return fetch(baseUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to fetch author data")
    })
}


