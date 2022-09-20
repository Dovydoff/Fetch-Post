// //? Simple post

// const post = {
//   title: "test title",
//   userId: 5,
// };

// const baseURL = "https://dummyjson.com/";

// const sendPost = async (postToSend) => {
//   try {
//     const response = await fetch(baseURL + "posts/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(postToSend),
//     });
//     const message = await response.json();
//     console.log(message);
//   } catch (error) {
//     console.log(error);
//   }
// };
// sendPost(post);

//? Simple post Form send

// dummyPostForm.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const response = await fetch("https://reqres.in/api/user", {
//     method: "POST",
//     body: new FormData(dummyPostForm),
//   });
//   const message = await response.json();
//   console.log(message);
// });

//? 3 nd
//? Task for students
/*
Make a POST call to create new post using endpoint: https://jsonplaceholder.typicode.com/posts
Body structure should be as in example(should contain title, body and userId as number): 
    title: 'testTitle',
    body: 'very much info post',
    userId: 1
Create fetch call using async/await. 
Console.log success message; 
*/

// const post = {
//   title: "testTitle",
//   body: "Some instructions that should go into this line of code",
//   userId: 100,
// };

// const baseURL = "https://jsonplaceholder.typicode.com/";

// const sendPost = async (postToSend) => {
//   try {
//     const response = await fetch(baseURL + "posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(postToSend),
//     });
//     const message = await response.json();
//     console.log(message);
//   } catch (error) {
//     console.log(error);
//   }
// };
// sendPost(post);
