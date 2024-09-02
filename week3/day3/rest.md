## What is REST?

REST -> Respresentational State Transfer

# REST Archiectural Constraints

1. Uniform Interface
    - one logical URI per resource

2. Client-Server relatoinship
    - Client and Server should be separate
    - Need to be able to evolve on their own
    - should be able to swap out server without affecting frontend
    - keep loosely coupled

3. Stateless
    - Make all client-server interactions stateless (no data is stored on the server)
    - Treats all incoming requests as new requests
    - EX. User authentication. pass in OAuth Token with each request.
    - Client is state management

4. Cacheable
    - Be able to cache certain requests for performance improvements
    - All GET requests should be cached by default
    - Send "cacheable" through the request headers
    - POST requests should be able to be cached when specified (Expires and Cache-Control header)

5. Layered Systems
    - Gateways
    - Provides for the client to interface while abstracting a lot of network details (facade pattern)
    - User only sees that it makes a request to the gateway
    - Authentication, internal algorithms, etc. are abstracted away

6. Code on Demand (optional)
    - Have the ability to return executable code


## REST key points

# Readability

- Strive for the URI/URL to describe itself
- Shouldn't be needlessly descript (let the HTTP verb also do the talking)

BAD: DELETE http://www.site.com/api/deleteMovie/42
GOOD: DELETE http://www.site.com/api/movie/42

General Structure:
structure URIs to be hierarchical in nature

http://site.com/<category>/<sub-category>/<sub-category>/<resource>
http://site.com/users/28/orders/867 // Get user with user_id of 28 and then that user's 867th order

# Filtering

- Specify additional contraints on a particular resource
- Do this through query parameters

Ex. GET http://www.site.com/api/movies?limit=5
// returns top 5 movies

Ex. GET http://www.site.com/api/movies?limit=5&offset=100
// returns the movies between 101-105 in the standings

# ordering

same idea as above

EX. GET http://www.site.com/api/movies?order=desc
// returns all movies from Z-A

# Versioning

Circumvents problem of being unable to tweak or update an existing endpoint without breaking the endpoint for sites that rely on it.

- version specific endpoints so when changes are made to an endpoint, the old endpoint still exists and operates with clients

BAD:
http://www.site.com/api/movies/12 -> 'Star Wars'
some time later it is changed
http://www.site.com/api/movies/12 -> {"title: "Star Wars", "year": 1977}
change of payload data will cause clients page to break because they weren't expecting an object

GOOD:
http://www.site.com/api/v1/movies/12 -> 'Star Wars'
http://www.site.com/api/v2/movies/12 -> {"name: "Star Wars", "year": 1977}
http://www.site.com/api/v3/movies/12 -> {"title: "Star Wars", "year": 1977}

# documentation of API endpoints

- documenting API endpoints essential for allowing users to interact with our data in a predictable way

- things to document:
    - accepted methods (GET, POST, HEAD, PUT, PATCH, DELETE)
    - returned values (payload) (how the data is structured JSON, arrays, text, etc.)
    - status codes and their meanings
    - Ex. 400 means forgotten username and password