import { createMocks } from "node-mocks-http";
import apiBooksById from "../pages/api/books/[id]";
import apiBooks from "../pages/api/books/index";

describe("Library API", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = { ...OLD_ENV }; // Make a copy
    process.env.MONGO_URI = "dev";
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  describe("/api/books", () => {
    test("can create a book", async () => {
      const { req, res } = createMocks({
        method: "POST",
        body: {
          title: "a new book for testing",
          author: "jest",
          description: "a fine book",
          isbn: 1234567890125,
        },
      });

      await apiBooks(req, res);

      console.log(res.error);

      expect(res._getStatusCode()).toBe(200);
    });
  });

  describe("/api/books/[id]", () => {
    test("returns an error on nonexistent book", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          id: "0",
        },
      });

      await apiBooksById(req, res);

      expect(res._getStatusCode()).toBe(400);
    });
  });
});
