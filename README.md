# States Autocomplete

An autocomplete search application utilizing Docker, Node.js, React, and ElasticSearch. Try typing in any of the states in the U.S and results should appear! (Rate limited on keystrokes to 400ms)

## Installation and build

You will need docker installed. After installation, run the following command to bring up the container. This will build both the back and front ends.

```bash
docker-compose up --build
```

Please give it a few minutes to build. It might seem to hang when it says `Checking connection to ElasticSearch` but it will eventually move forward!

The `client`, `server`, and `data` directories are all located in `src` folder.

## Usage
In order to query the api, use the following cURL command:

```bash
curl "localhost:8080/api/states/autocomplete?text={{inputValue}}"
```
`inputValue` is the user input query string.

If you have already built the container before, and get a `resource_already_exists_exception` in the console for ElasticSearch indexes, please let it finish building, then execute the following cURL command:

```bash
curl -XDELETE localhost:9200/states
```
then try terminating the process (Ctrl + C), and rebuilding with `docker-compose up --build`.

The front end has been bootstrapped with create-react-app, and the development server runs on port 3000, so please navigate to localhost:3000 to view and interact with the front end piece. The proxy has already been set to port 8080 in `src/client/package.json`. The ElasticSearch instance uses port 9200.