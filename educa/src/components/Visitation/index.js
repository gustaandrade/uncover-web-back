import React, { useState, useEffect, useCallback } from "react";

import api from "../../services/api";

import Select from "react-select";
import { SingleDatePicker } from "react-dates";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./visitation.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

export default function Visitation({ history }) {
  const [focused, setFocused] = useState(false);
  const [day, setDay] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [formVisit, setFormVisit] = useState({});

  const listCategoria = useCallback(async () => {
    const response = await api.get("/company");
    if (response.data) {
      setCompanies(response.data);
    }
  }, []);

  useEffect(() => {
    listCategoria();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/visitation", {
      ...formVisit,
      company_id: formVisit.company_id.value,
      date: moment(day).format("YYYY-MM-DD")
    });

    if (response.data.id) {
      history.push("/");
    } else {
      alert(`Oppps! Ocorreu um erro ao cadastrar a visita: ${formVisit.name}`);
    }
    console.log({
      ...formVisit,
      company_id: formVisit.company_id.value,
      date: moment(day).format("YYYY-MM-DD")
    });
  }

  return (
    <div className="visitation-form">
      <h1>Visitation</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Empresas</Form.Label>
        <Select
          placeholder=""
          options={[
            ...companies.map(item => ({ value: item.id, label: item.name }))
          ]}
          value={formVisit.company_id}
          onChange={value => setFormVisit({ ...formVisit, company_id: value })}
        />

        <Form.Label>Data do evento</Form.Label>
        <SingleDatePicker
          className="single-date"
          placeholder=""
          numberOfMonths={1}
          displayFormat="DD MMM YYYY"
          id="single-date-picker"
          hideKeyboardShortcutsPanel
          focused={focused}
          date={day}
          block
          onDateChange={selectedDay => {
            setDay(selectedDay);
          }}
          onFocusChange={({ focused }) => {
            setFocused(focused);
          }}
        />

        <Form.Label>Número de pessoas</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={formVisit.position}
          onChange={e =>
            setFormVisit({ ...formVisit, position: e.target.value })
          }
        />

        <Button variant="primary" type="submit" size="lg" block>
          Criar
        </Button>
      </Form>
    </div>
  );
}
