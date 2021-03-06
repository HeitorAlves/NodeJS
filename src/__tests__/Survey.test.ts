import request from 'supertest';
import { app } from '../app';
import createConnection from '../database'

describe("Surveys", () => {
    beforeAll(async()=>{
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be ablle to create a new user", async()=>
    {
        const response = await request(app).post("/surveys")
        .send({
            title:"teste",
            description: "User example"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        
    });

    it("should be able to create all surveys", async()=>{
        await request(app).post("/surveys")
        .send({
            title:"teste",
            description: "User example"
        });


        const response = await request(app).get("/surveys");
        expect(response.body.length).toBe(2)
    })

})