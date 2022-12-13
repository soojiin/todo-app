export const del = (id) => {
    const url = `http://localhost:3001/todolist/${id}`;
    const options = {
        method: "DELETE"
    }
    fetch(url, options)
    .then(res => res.json())
    .catch(error => console.error("Error", error))
};