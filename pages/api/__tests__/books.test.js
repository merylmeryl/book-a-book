import jestConfig from "../../../jest.config";
import indexRoute from "../books/index";

// BEGIN TESTS
describe("Book CRUD", () => {
  let req;
  let res;

  describe("/api/books", () => {
    beforeEach(() => {
      req = {};
      res = {
        status: jest.fn(() => res),
        json: (d) => {
          console.log("\n : " + d.message);
        },
        end: jest.fn(),
      };
    });

    it("Should return 405 if the method is not POST", async () => {
      req.method = "PUT";
      const response = await indexRoute(req, res);
      expect(res.status).toBeCalledWith(405);
    });

    // it("Should return 200 if the method is GET", async () => {
    //   req.method = "GET";
    //   req.query = "";
    //   const response = await indexRoute(req, res);
    //   expect(res.status).toBeCalledWith(200);
    // });
  });
});
