"use strict";

const Visitation = use("App/Models/Visitation");

class VisitationController {
  async index() {
    const visitation = await Visitation.query()
      .with("company")
      .fetch();
    return visitation;
  }

  async store({ request }) {
    const data = request.only(["company_id", "date", "positions"]);
    const visitation = await Visitation.create({ ...data });
    return visitation;
  }

  async show({ params }) {
    const visitation = await Visitation.findOrFail(params.id);
    return visitation;
  }

  async update({ params, request }) {
    const visitation = await Visitation.findOrFail(params.id);
    const data = request.only(["companyId", "date", "positions"]);

    visitation.merge(data);

    await visitation.save();

    return visitation;
  }

  async destroy({ params, request, response }) {
    const visitation = await Visitation.findOrFail(params.id);
    await visitation.delete();
  }
}

module.exports = VisitationController;
