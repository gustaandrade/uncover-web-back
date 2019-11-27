import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./company.css";

const Company = () => {
  return (
    <div className="company-form">
      <h1>Company</h1>
      <Form>
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="" />

        <Form.Label>Imagens</Form.Label>
        <Form.Control type="file" placeholder="" />

        <Form.Label>Endereço</Form.Label>
        <Form.Control type="text" placeholder="" />

        <Form.Label>Descrição</Form.Label>
        <Form.Control as="textarea" rows="3" />

        <Button className="app-button" size="lg" block>
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default Company;
