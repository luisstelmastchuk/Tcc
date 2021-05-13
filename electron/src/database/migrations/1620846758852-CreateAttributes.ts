import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateAttributes1620846758852 implements MigrationInterface {
  name = 'CreateAttributes1620846758852'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "attributes" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "type" varchar NOT NULL, "table_id" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime(\'now\')), "deleted_at" datetime, CONSTRAINT "FK_bae2fa2616bc3900f442d1dc2cf" FOREIGN KEY ("table_id") REFERENCES "tables" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "attributes"')
  }
}
