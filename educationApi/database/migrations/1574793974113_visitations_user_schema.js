"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class VisitationsUserSchema extends Schema {
  up() {
    this.create("visitations_users", table => {
      table.increments();
      table
        .integer("visitation_id")
        .unsigned()
        .references("id")
        .inTable("visitations");
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.timestamps();
    });
  }

  down() {
    this.drop("visitations_users");
  }
}

module.exports = VisitationsUserSchema;
