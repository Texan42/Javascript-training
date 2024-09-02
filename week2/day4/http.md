## HTTP Request
<URL/URI> HTTP/1.1 GET / HTTP/1.1 Host: localhost:8080

## HTTP Methods
POST - Create a resource. Post a blog on forum -> Adding a blogpost (Create) 
GET - Retrieve a resource (Read) 
PUT - Update an existing resource (Update) 
DELETE - Delete a resource (Delete)
^^^CRUD
-------
HEAD - Ping to server TRACE PATCH

## HTTP Response
HTTP/1.1 Content-Type: Content-Type: text/html

## Status Codes
100 - Informational 100 Continue

200 - OK 
200 OK 
201 Created 
204 No Content

300 - Redirects 
307 Temporary Redirect 
308 Permanent Redirect

400 - Client Error (You messed up) 
400 Bad Request 
401 Not Authorized 
404 Not Found 
406 Not Acceptable 
418 I'm A Teapot

500 - Server Error (They messed up) 
500 Interal Error 
502 Bad Gateway 
504 Gateway Timeout