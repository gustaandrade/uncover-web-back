import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './company-card.css';

import Logo from '../../assets/nubank.jpg';

const CompanyCard = () => {
  return (
    <>
      <div className="card-deck">
        <Card className="bg-dark text-white">
          <Card.Img src={Logo} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Button variant="danger" size="sm" block>Excluir</Button>
          </Card.ImgOverlay>
        </Card>
        {/* <Card className="bg-dark text-white">
          <Card.Img src={Logo} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={Logo} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={Logo} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={Logo} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white">
          <Card.Img src={Logo} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card> */}
      </div>
    </>
  );
};

export default CompanyCard;
