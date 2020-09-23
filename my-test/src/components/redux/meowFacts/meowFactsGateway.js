
const baseUrl = "https://meowfacts.herokuapp.com/";

export const fetchMeowFacts = () => {
  return fetch(baseUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to fetch meow facts")
    })
}

