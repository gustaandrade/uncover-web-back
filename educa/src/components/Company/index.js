import React, { useState } from "react";

import api from "../../services/api";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./company.css";

export default function Company({ history }) {
  const [formData, setFormData] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.name) {
      const response = await api.post("/company", formData);
      if (response.data.id) {
        history.push("/");
      } else {
        alert(
          `Oppps! Ocorreu um erro ao cadastrar a empresa: ${formData.name}`
        );
      }
    }
  }
  return (
    <div className="company-form">
      <h1>Company</h1>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />

        <Form.Label>Imagens</Form.Label>
        <Form.Control type="file" placeholder="" />

        <Form.Label>Descrição</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          value={formData.description}
          onChange={e =>
            setFormData({ ...formData, description: e.target.value })
          }
        />

        <Button type="submit" className="app-button" size="lg" block>
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}
