// Get Method
fetch("https://reqres.in/api/users")
  .then((res) => {
    if (res.ok) console.log("Get Request Successful");
    else {
      console.log("Get Request Failed");
    }
    return res;
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Post Method
fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    "name": "John Doe",
    "job": "devloper",
  }),
})
.then((res) => {
  if (res.ok) console.log("POST Request Successful");
  else {
    console.log("POST Request Failed");
  }
  return res;
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));

//PUT Method
  fetch("https://reqres.in/api/users/457", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    "name": "John Doe",
    "job": "devloper",
  }),
})
.then((res) => {
  if (res.ok) console.log("PUT Request Successful");
  else {
    console.log("PUT Request Failed");
  }
  return res;
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err));

// DELETE Request
// fetch("https://reqres.in/api/users/457", {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
// .then((res) => {
//   if (res.ok) console.log("DELETE Request Successful");
//   else {
//     console.log("DELETE  Request Failed");
//   }
//   return res;
// })
// .then((res) => console.log(res))

