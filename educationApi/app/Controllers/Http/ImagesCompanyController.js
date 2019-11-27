"use strict";

const ImagesCompany = use("App/Models/ImagesCompany");

const Helpers = use("Helpers");

const fs = require("fs");

class ImagesCompanyController {
  async show({ params, response }) {
    const imagesCompany = await ImagesCompany.findOrFail(params.id);

    return response.download(
      Helpers.tmpPath(`uploads/imagesCompany/${imagesCompany.file}`)
    );
  }

  async store({ request, response }) {
    try {
      if (!request.file("file")) return;

      const upload = request.file("file");
      const { company_id } = request.only(["company_id"]);

      const fileName = `${Date.now()}.${upload.subtype}`;

      await upload.move(Helpers.tmpPath("uploads/imagesCompany"), {
        name: fileName
      });

      if (!upload.moved()) {
        throw upload.error();
      }

      const file = await ImagesCompany.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype,
        company_id: company_id
      });

      return file;
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: "Erro no upload de arquivo" } });
    }
  }
  async destroy({ params, response }) {
    try {
      const file = await ImagesCompany.findOrFail(params.id);

      const filePath = Helpers.tmpPath(`uploads/imagesCompany/${file.file}`);

      await fs.unlink(filePath, err => response.status(400).send(err));

      await file.delete();
    } catch (err) {
      return response.status(400).send(err);
    }
  }
}

module.exports = ImagesCompanyController;
