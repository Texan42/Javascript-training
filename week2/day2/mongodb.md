## MongoDB
# Key points
Collections are just a grouping of documents

Document is a JSON-like used to store data (technically BSON)

BSON is Binary JSON -> Allows us to store data type

Allows for super fast read write times

Lives and breathes JavaScript

The data we read/write is the same data we use in our application

MongoDB is Schema-less (But you can have one in application layer ex. Mongoose)

# Dictionary
Database -> Database Collections -> Table Documents -> Rows Fields -> Columns

# Embedding
Pros:

MongoDB favors embedding approach (throws normalization out the window)

Mongo believes in storing data naturally

Joins are expensive, disk storage is cheaper by comparison

SQL Relational models no embedding (3NF)

Cons:

More data than we need is sent

Documents have 16 MB limit

# Referencing
Smaller documents (less overhead)

Avoid 16 MB limit

