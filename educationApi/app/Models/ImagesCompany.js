"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Env = use("Env");

class ImagesCompany extends Model {
  static get computed() {
    return ["url"];
  }

  getUrl({ id }) {
    return `${Env.get("APP_URL")}/imagesCompany/${id}`;
  }
}

module.exports = ImagesCompany;
