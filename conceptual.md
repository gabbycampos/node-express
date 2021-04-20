### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
AJAX, promises, setTimeout.

- What is a Promise?
There are objects that can be resolved or rejected asynchronously.

- What are the differences between an async function and a regular function?
A regular function is synchrounous, but an async function and be resolved later in the code.

- What is the difference between Node.js and Express.js?
Node.js is like a backend language for JavaScript. You can run JavaScript on the server side. Express.js is a framework for Node, similar to Flask.

- What is the error-first callback pattern?
The first argument of the callback is for an error object and the second is for successful response data.

- What is middleware?
Code that runs between when a request comes to the server and time when front-end responds. Useful in order to seperate code into neater groupings.

- What does the `next` function do?
'next' is needed in order for code to move on to the next route.

- What does `RETURNING` do in SQL? When would you use it?
You can use it to return status codes.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
The code is awaiting the resolution of the 'await' promise so it won't return the values without a .then

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
