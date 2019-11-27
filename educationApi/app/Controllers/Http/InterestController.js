"use strict";

const Interest = use("App/Models/Interest");

class InterestController {
  async index() {
    const interest = await Interest.all();

    return interest;
  }

  async store({ request }) {
    const data = request.only(["name"]);
    const interest = await Interest.create({ ...data });
    return interest;
  }

  async show({ params }) {
    const interest = await Interest.findOrFail(params.id);
    return interest;
  }

  async update({ params, request, response }) {
    const interest = await Interest.findOrFail(params.id);
    const data = request.only(["name"]);

    interest.merge(data);

    await interest.save();

    return interest;
  }

  async destroy({ params, request, response }) {
    const interest = await Interest.findOrFail(params.id);
    await interest.delete();
  }
}

module.exports = InterestController;
