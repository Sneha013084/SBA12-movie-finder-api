## Movie Search API

This is a simple Node.js + Express application that allows users to search for movies using the OMDb API. The server exposes an endpoint where you can query movies by title and get back JSON data with movie details.

## Features: 

      Search for movies by title (/api/movies?title=...)
  
      Uses the OMDb APImfor real movie data

      Environment variables for storing the API key securely (.env file)

      Structured with controllers and routes (MVC style)

##  1. server.js

This is the entry point of Node.js application.

        Imported Express to set up the web server.

        Configured middleware like express.json() for handling JSON requests.

        Connected routes (from routes/movieRoutes.js) so all requests go through a proper path (e.g., /api/movies).

        Started the server on a defined port (PORT variable).

        Loaded environment variables with dotenv so your API key stays safe.


  ##  2. controllers/movieController.js

This file contains the logic for handling requests.

        Imported axios to call the OMDb API (a third-party movie database).

        Created a function like getMovie(req, res) that:

        Reads the movie title from the request (e.g., /api/movies?title=Inception).

        Sends a request to the OMDb API using your API key.

        If the movie is found, sends the movie data back to the client (browser or Postman).

  ##  3. routes/movieRoutes.js

This file defines the API endpoints.

        Imported express.Router() to handle routes separately.

        Defined a GET /api/movies route that points to the getMovie controller.

        Exported the router to be used in server.js.


