var btn = document.querySelector("button");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var profilepic = document.querySelector("img")

function newUser() {
    fetch("https://randomuser.me/api/")
    .then(handleErrors)
    .then(function(res) {
        return res.json();
    })
    .then(function(data){   
        console.log(data);
        data = data.results[0];
        console.log(data)
        fullname.innerText = `${data.name.first} ${data.name.last}`
        username.innerText = data.login.username
        email.innerText = `Email: ${data.email}`
        city.innerText = `City: ${data.location.city}`
        profilepic.src = data.picture.medium
    })
    .catch(function(error){
        console.log(error);
    });
}

function handleErrors (request){
    if(!request.ok) {
      throw Error(request.status);
    }
    return request;
}

newUser();

btn.addEventListener("click", newUser)