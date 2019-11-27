"use strict";
const Company = use("App/Models/Company");

class CompanyController {
  async index() {
    const company = await Company.query()
      .with("images")
      .fetch();

    return company;
  }
  async store({ request, response, view }) {
    const data = request.only(["name", "description"]);
    const company = await Company.create({ ...data });

    return company;
  }

  async show({ params }) {
    const company = await Company.findOrCreate(params.id);

    return company;
  }

  async update({ params, request, response }) {
    const company = await Company.findOrFail(params.id);
    const data = request.only(["name"]);

    company.merge(data);

    await company.save();

    return company;
  }
  async destroy({ params, request, response }) {
    const company = await Company.findOrFail(params.id);
    await company.delete();
  }
}

module.exports = CompanyController;
