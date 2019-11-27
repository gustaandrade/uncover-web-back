"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class VisitationSchema extends Schema {
  up() {
    this.create("visitations", table => {
      table.increments();
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies");
      table.date("date").notNullable();
      table.integer("positions");
      table.timestamps();
    });
  }

  down() {
    this.drop("visitations");
  }
}

module.exports = VisitationSchema;
