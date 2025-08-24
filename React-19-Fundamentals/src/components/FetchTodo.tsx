import { use } from "react";
// npm i react@experimental react-dom@experimental

// // create a fetch data function
// const fetchData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return res.json();
// };

// // create a promise once outside the component
// const todoPromise = fetchData();


// Another way to create promise without async/await
// use fetch.then()
const todoPromise = fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json())


const FetchTodo = () => {
  const data = use(todoPromise);
  return <h1>{data.title}</h1>;
};

export default FetchTodo;
