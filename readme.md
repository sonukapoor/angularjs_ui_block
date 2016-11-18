## Proof of concept

This is a simple example demonstrating how jQuery will block the UI when scripts are injected via a directive. 
If jQuery is not added then there is no UI blocking.

## Running the project

```
npm install
lite-server
``` 

## Blocking demonstration

Run the project as is in your browser http://localhost:3000

## Removing the Blocking

To remove the block remove the entry to jQuery from the index.html

```
<script src="https://code.jquery.com/jquery-3.1.1.js" ...></script>
```