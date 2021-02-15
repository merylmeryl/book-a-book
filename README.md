## Requirements

- a MongoDB connection

## Setup

1. Add a file called ".env.local" and paste these lines:

```bash
MONGO_URI="<IN_THE_EMAIL>"
BASE_URL="http://localhost:3000"
```

2. Install node modules

```bash
npm install
```

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

## Optimizations

- No need to load history on the main page

## Thoughts

Because the specifications were simple, I decided to prioritize extensibility and ease of use, and to treat the project as a Proof of Concept. This is why I have chosen not to add an authentication system, CORS protection, etc. I do not know the intended use of the product, so I tried to keep things as un-opinionated as possible.

My gut says that check-ins and returns should be performed by a User, but it wasn't listed in the spec, so I decided that this was an assumption that could later prove to be false.
