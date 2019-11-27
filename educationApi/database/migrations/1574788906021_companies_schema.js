"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompaniesSchema extends Schema {
  up() {
    this.create("companies", table => {
      table.increments();
      table.string("name").notNullable();
      table.string("description");
      table.timestamps();
    });
  }

  down() {
    this.drop("companies");
  }
}

module.exports = CompaniesSchema;
