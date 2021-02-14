## Requirements

- a MongoDB connection

## Add a file called ".env.local" and paste these lines:

- MONGO_URI="<MONGO_DB_URI_HERE>"
- BASE_URL="http://localhost:3000"

## Run Development Server

```bash
npm run dev
```

## Test Cases

- 0 books in library
- 1,000,000 books in library
- Create a book
- Update a book
- Get a book
- Delete a book
- Pagination

## Thoughts

Because the specifications were simple, I decided to prioritize extensibility and ease of use, and to treat the project as a Proof of Concept. This is why I have chosen not to add an authentication system, CORS protection, etc. I do not know the intended use of the product, so I tried to keep things as un-opinionated as possible.

My gut says that check-ins and returns should be performed by a User, but it wasn't listed in the spec, so I decided that this was an assumption that could later prove to be false.

I considered using a Trigger in MongoDB to track state changes, but decided to limit these updates to the API for the time being.
