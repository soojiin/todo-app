export const taskUpdate = (data) => {
    const url = `http://localhost:3001/todolist/${data.id}`;
    const options = {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            content: data.content
        }),
    };
    fetch(url, options)
    .then(res => res.json())
    .catch(error => console.error("Error", error))
};

export const checkboxUpdate = (data) => {
    const url = `http://localhost:3001/todolist/${data.id}`;
    const options = {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            completed: data.completed
        }),
    };
    fetch(url, options)
    .then(res => res.json())
    .catch(error => console.error("Error", error))
};