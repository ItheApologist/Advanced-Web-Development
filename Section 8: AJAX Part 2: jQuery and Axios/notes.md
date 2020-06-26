# Section 8 Notes

## AJAX with jQuery

The only problem with the fetch function in javascript is that it is not fully supported in all browsers. Well, really IE if you care THAT much. In case we did actually care, we can use jQuery to make those API request calls. Not only that, it also parses the data into JSON. 

Example:

```js
$.getJSON('/my/url', function(data) {

});
```

The important methods are:

* $.ajax
* $.get
* $.post
* $.getJSON

## .ajax

The "base" jQuery Method. The others will be shorthands for specific uses. This method allows us to do anything in the realm of API request. 

Example:

```js
$.ajax({
    method: "GET",
    url: "some.api.com",
})
.done(function(res) {
    console.log(res);
})
.fail(function() {
    //do something
})
```

In our above example, the .ajax method requires us to specify our method and url in a keyvalue pair. Just like with regular javascript, this is created as a promise. We use .done to run when things are completed successfully and .fail if something goes wrong. Unlike javascript's .catch, .fail will also trigger for any status code that isn't 200.

## GET, POST, and getJSON Shorthands

.get shorthands the options object by omitting it for the predefined method of GET and the url set to your URL. Instead you just write ```$.get(URL)```.

.post shorthand the options object by omitting it for the predefined method of GET and the url set to your URL. .post has two items to pass in: the URL and the data you are sending (in the form of a JS object).

.getJSON shorthand works the same as GET but it sets the datatype as JSON.

## Axios

A third party lightweight library for AJAX. It serves as an alternative to jQuery if you do not want to import jQuery for only a few task. Works with node.js for backend functionality.

```js
axios.get(url)
.then(function(res) {
    console.log(res.data);
})
.catch(function(e) {
    console.log(e);
})
```
Like jQuery, Axios needs to be required in the HTML. Like jQuery, you can specify which kind of request to make. To do so, write .get or .post after axios. Axios offers error handles as well. There are two methods: .response and .request. They each handle the errors based off their respective names. 