import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { isParameter } from "typescript";

export class CreateSurveys1614299025295 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"surveys",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary : true
                    },
                    {
                        name:"title",
                        type:"varchar"
                        
                    },
                    {
                        name:"description",
                        type:"varchar"
                        
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                        
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveys");
    }

}