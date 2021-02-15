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

## Business Requirements: Library management system

- API for CRUD of a books
- CRUD title, author, isbn, description
- Ability to manage books through a web interface
- Ability to check in and check out a book
- History of all books
- Report that contains the current state of all books

## Test Cases

- 0 books in library
- 1,000,000 books in library
- Create a book
- Update a book
- Get a book
- Delete a book
- Pagination

## Thoughts

- Because the specifications were simple, I decided to prioritize extensibility and ease of use, and to treat the project as a Proof of Concept. This is why I have chosen not to add an authentication system, etc. I do not know the intended use of the product, so I tried to keep things as un-opinionated as possible.

- My gut says that check-ins and returns should be performed by a User, but it wasn't listed in the spec, so I decided that this was an assumption that could later prove to be false.

- I will add more testing, set up CORS middleware and deploy the site later when I have some time.
