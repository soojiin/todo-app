export const add = (data) => {
    const url = "http://localhost:3001/todolist";
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    };
    fetch(url, options)
    .then(res => res.json())
    .catch(error => console.error("Error", error))
};