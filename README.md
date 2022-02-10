# Groupomania-backend

This is the back end server for Project 7 of the Web Developer path.

### Prerequisites

You will need to have Node and `npm` installed locally on your machine.

### Installation

Clone this repo. From within the project folder, run `npm install`. You
can then run the server with `node server`.
The server should run on `localhost` with default port `3000`. If the
server runs on another port for any reason, this is printed to the
console when the server starts, e.g. `Listening on port 3000`.
When the server starts, you should also get a second print : "Connexion à mongo DB réussie".
To run the application, you will need to create a file .env whith those 3 variables in it :
USER=<your SQL session id>
PASSWORD=<your SQL session password>
JWT_SECRET=your_super_secret
