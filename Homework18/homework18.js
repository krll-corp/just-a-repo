// Using then
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log("Todo Titles:");
        data.forEach(todo => console.log(todo.title));
    });

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
        console.log("Comment Bodies:");
        data.forEach(comment => console.log(comment.body));
    });

// Using async/await
async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log("User Names and Emails:");
    data.forEach(user => console.log(user.name, user.email));
}

getUsers();

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log("Post IDs and Titles:");
    data.forEach(post => console.log(post.id, post.title));
}

getPosts();
