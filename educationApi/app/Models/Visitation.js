"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Visitation extends Model {
  company() {
    return this.belongsTo("App/Models/Company");
  }
  user() {
    return;
    this.belongsToMany("App/Models/User").pivotTable("visitations_users");
  }
}

module.exports = Visitation;
