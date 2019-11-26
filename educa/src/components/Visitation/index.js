import React, { useState } from 'react';
import Select from 'react-select';
import { SingleDatePicker } from 'react-dates';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './visitation.css';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const Visitation = () => {
  const [focused, setFocused] = useState(false);
  const [day, setDay] = useState(null);

  return (
    <div className="visitation-form">
      <h1>Visitation</h1>
      <Form>
        <Form.Label>Empresas</Form.Label>
        <Select
          placeholder=""
          isMulti
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
        <Form.Control type="text" placeholder="" />

        <Button variant="primary" size="lg" block>Criar</Button>
      </Form>
    </div>
  );
};

export default Visitation;
