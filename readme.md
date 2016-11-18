## Proof of concept

This is a simple example demonstrating how jQuery will block the UI when scripts are injected via a directive in Angular 1.5.8. 
If jQuery is not added then there is no UI blocking.

## Running the project

```
npm install
lite-server
``` 

## Blocking demonstration

Run the project as is in chrome http://localhost:3000 and view the chrome debugger tools console. 
You should see the following warning:

> jquery-3.1.1.js:9425 Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental 
> effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.

## Removing the Blocking

To remove the block remove the entry to jQuery from the index.html

```
<script src="https://code.jquery.com/jquery-3.1.1.js" ...></script>
```