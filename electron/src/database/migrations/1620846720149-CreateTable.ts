import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTable1620846720149 implements MigrationInterface {
    name = 'CreateTable1620846720149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tables" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "primaryKey" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tables"`);
    }

}
