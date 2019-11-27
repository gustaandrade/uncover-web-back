import React, { useEffect, useCallback, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import api from "../../services/api";

import CompanyCard from "../CompanyCard";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  const listCompanies = useCallback(async () => {
    const response = await api.get("/company");
    if (response.data) {
      setCompanies(response.data);
    }
  }, []);
  useEffect(() => {
    listCompanies();
  }, []);

  console.log(companies);

  return (
    <>
      <Container>
        <Row>
          {companies.map(company => (
            <CompanyCard
              company={company}
              setCompanies={setCompanies}
              companies={companies}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
