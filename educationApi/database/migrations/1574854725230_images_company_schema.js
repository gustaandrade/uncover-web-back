"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ImagesCompanySchema extends Schema {
  up() {
    this.create("images_companies", table => {
      table.increments();
      table.string("file").notNullable();
      table.string("name").notNullable();
      table.string("type", 20);
      table.string("subtype", 20);
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("images_companies");
  }
}

module.exports = ImagesCompanySchema;
