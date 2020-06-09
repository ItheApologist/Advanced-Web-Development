# Section 7 Notes

## What is AJAX

AJAX stands for Asynchronous JavaScript and XML. It is not a library, framework, or technology. It is a conceptual approach to designing a website. 

AJAX allows websites to send and request data from a server in the background without disturbing the current page. This means that pages no longer need to refresh to update content and leads to single page apps.

## JSON and XML

Both JSON and XML are data formats. This is important to deal with because APIs deal in pure data and we need a way to handle that data. Hence where data formats come in.

### XML

XML, or Extended Markup Language, is a data format that is syntactically similar to HTML, but it does not describe presentation like HTML. Instead, it describes pure data and it's relationship with one another.

### JSON

JavaScript Object Notation, is a data format that closely resembles JavaScript objects. JSON is the now most utilized data format due to the popularity of JavaScript.

## XMLHttpRequest

XMLHttpRequest is the JavaScript interface for making API request calls. It and it's methods are initialized by ```var NAME = new XMLHttpRequest()```

XMLHttpRequest.readyState has five recorded values:

| Value | State | Description|
| --- | --- | --- |
| 0 | UNSENT | Client has been created. open() not called yet. |
| 1 | OPENED | open() has been called. |
| 2 | HEADERS_RECEIVED | send() has been called. Headers and Status are available |
| 3 | LOADING | Downloading. respnoseText holds partial data. |
| 4 | DONE | The operation is complete.

## Fetch API

It is the update to XHR. It has a cleaner syntax and offers more robust features. 

Example:

```js
fetch(url)
.then(function(res) {
    console.log(res)
})
.catch(function(error) {
    console.log(error)
})
```

In the above example, we simply type ```fetch(url)``` to query the API. It is returned as a promise, so we run a .then for success and .catch for failures.

## Fetch Options

Fetch give the ability to add an object with key value pairs. We can send POST request and data along with that POST request among other things. 

```js
fetch(url, {
    method: "POST",
    body: JSON.stringify({
        name: "blue",
        login: "bluecat",
    })
})
.then(function (data) {
    //do something
})
.catch(function (error) {
    //handle error
})
```

In the above example, we specify the method as POST (this is GET by default) and send some information in a body (name and login). JSON.stringify simplifies converting the body elements into a string.

## Fetch Error Handling

.catch doesn't handle any response errors. It only handles errors with the initial connection (internet issues and such). Therefor, things like 404 errors do not fall under .catch, they fall under .then. That means most of your error handling needs to be done in .then.

Example:

```js
var btn = document.querySelector("button");
btn.addEventListener("click", function(){
  var url = 'https://api.github.com/users/coltasdas';
  fetch(url)
  .then(handleErrors)
  .then(function(request){
    console.log("EVERYTHING IS FINE!");
    console.log(request);
  })
  .catch(function(error){
    console.log(error);
  });
});

function handleErrors (request){
  if(!request.ok) {
    throw Error(request.status);
  }
  return request;
}
```