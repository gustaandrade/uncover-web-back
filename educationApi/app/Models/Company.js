"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Company extends Model {
  images() {
    return this.hasMany("App/Models/ImagesCompany");
  }
}

module.exports = Company;
