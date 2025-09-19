const request = require("supertest");
const app = require("./server");

describe("GET /", () => {
  it("should return Hello, World! message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello, World!" });
  });

  it("should return JSON content-type", async () => {
    const res = await request(app).get("/");
    expect(res.headers["content-type"]).toMatch(/json/);
  });

  it("should not allow POST method on /", async () => {
    const res = await request(app).post("/");
    expect(res.statusCode).toBe(404); // Express default for undefined route
  });

  it("should respond within reasonable time", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});

// Optional: Test for undefined routes
describe("GET /undefined-route", () => {
  it("should return 404 for unknown route", async () => {
    const res = await request(app).get("/unknown");
    expect(res.statusCode).toBe(404);
  });
});
