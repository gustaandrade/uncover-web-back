"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class InterestsSchema extends Schema {
  up() {
    this.create("interests", table => {
      table.increments();
      table.string("name").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("interests");
  }
}

module.exports = InterestsSchema;
