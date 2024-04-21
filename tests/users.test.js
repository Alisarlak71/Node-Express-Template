const request = require("supertest");
const app = require("../index");

require("dotenv").config();
require("../config/db.config");

let token = '';

beforeAll(async () => {
  const response = await request(app).get("/api/v1/auth/login/test");
  token = response.body.token;
  console.log(token);
});

describe("GET /api/v1/users", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/api/v1/users").set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /api/v1/users/:id", () => {
  it("should return a user", async () => {
    const res = await request(app).get("/api/v1/users/662523362e27c863d69ff802").set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.username).toBe("admin");
  });
});

describe("POST /api/v1/users", () => {
  it("should create a user", async () => {
    const res = await request(app).post("/api/v1/users").send({
      first_name: "ali",
      last_name: "ahmadi",
      username: "alihm15264",
    }).set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.user.first_name).toBe("ali");
  });
});

describe("PUT /api/v2/users/:id", () => {
  it("should update a user", async () => {
    const res = await request(app)
      .put("/api/v1/users/662523362e27c863d69ff802")
      .send({
        first_name: "ali",
        last_name: "ahmadi",
        username: "ah1513",
      }).set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.usernmae).toBe("ah1513");
  });
});

describe("DELETE /api/v2/users/:id", () => {
  it("should delete a user", async () => {
    const res = await request(app).delete(
      "/api/v2/users/662523362e27c863d69ff802"
    ).set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });
});
