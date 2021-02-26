import request from 'supertest';
import { app } from '../app';
import createConnection from '../database'

describe("Users", () => {
    beforeAll(async()=>{
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be ablle to create a new user", async()=>
    {
        const response = await request(app).post("/users")
        .send({
            email:"user123@exemple.com",
            name: "User example"
        });

        expect(response.status).toBe(201);
    });

    it("Should be ablle to create a new user", async()=>
    {
        const response = await request(app).post("/users")
        .send({
            email:"user123@exemple.com",
            name: "User example"
        });

        expect(response.status).toBe(400);
    });

})