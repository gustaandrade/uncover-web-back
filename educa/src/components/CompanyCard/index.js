import React from "react";

import api from "../../services/api";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./company-card.css";

export default function CompanyCard({ company, setCompanies, companies }) {
  async function deleteCompany() {
    const response = await api.delete(`/company/${company.id}`);
    console.log(response);
    if (response.status === 204) {
      setCompanies(companies.filter(item => item !== company.id));
    }
  }

  return (
    <>
      <div className="card-deck">
        <Card className="bg-dark text-white">
          <Card.Img
            src={
              company.images.length
                ? company.images[0].url
                : "https://via.placeholder.com/800"
            }
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>{company.name}</Card.Title>
            <Card.Text>{company.description}</Card.Text>
            <Button variant="danger" size="sm" block onClick={deleteCompany}>
              Excluir
            </Button>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}
