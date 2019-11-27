import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './company-card.css';

const CompanyCard = props => {
  return (
    <>
      <div className="card-deck">
        <Card className="bg-dark text-white">
          <Card.Img src={props.logo} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.data}</Card.Text>
            <Button variant="danger" size="sm" block>Excluir</Button>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
};

export default CompanyCard;
