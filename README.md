# Cash Machine

> A small program which returns number of notes equal to user entered amount.

## How to run API and frontend app

After cloning this repo
```
cd cash-machine
npm install

```
---
Now you can test application running on port 8000
To see frontend application open following url in your browser
[http://localhost:8000/](http://localhost:8000/)


If you want to test cash machine functionality directly you can use an api end point like follow
http://localhost:8000/withdraw
This is post method which accepts input as a json like 
input:

{
amount: 80
}

and return output as a json object like follow

output: 

{
	success: true
	statusCode: 200,
	notes: [10, 20, 50]
}

## Run Test cases
``` 
npm run test

```

---