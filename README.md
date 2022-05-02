# Verve Ventures Assignment for Juan Ignacio Rios
You need to have NodeJS and Postman installed in your machine.
The text in boxes is code to be run on the terminal under this directory.

## Setup

```
npm install
```


## Unit tests on internal functionality

```
npm run test
```

## Start API

```
npm run start
```

## API Testing
Open postman and click the import button in the top left corner. select the postman_collection.json file in this repo.
press the blue send button to see the response.

## API Specification
The api runs under http://localhost:5000/api/v1.

### Endpoint /A:
* accepts only POST request.
* takes only JSON body
* accepts 2 keys, str1, and str2
* for more information about its functionality, refer to the pdf in the repo

### Endpoint /B:
* accepts only POST request.
* takes only JSON body
* accepts 2 keys, str1, and str2
* for more information about its functionality, refer to the pdf in the repo

### Endpoint /C:
* accepts only POST request.
* takes only JSON body
* accepts 1 key, str1
* for more information about its functionality, refer to the pdf in the repo


## End Notes
The skeleton of this project was produced by running npx create-express-api
