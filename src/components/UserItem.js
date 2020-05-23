import React from 'react';
import { Card } from 'react-bootstrap';

const UserItem = ({ name, email, country, photo, gender, age }) => {
  return (
    <Card className="user">
      <Card.Img variant="top" src={photo} className="user__image" alt={name} />
      <Card.Body>
        <Card.Title className="user__name">{name}</Card.Title>
        <Card.Text className="user__details">
          <span>
            <strong>Email:</strong> {email}
          </span>
          <span>
            <strong>Country:</strong> {country}
          </span>
          <span>
            <strong>Gender:</strong> {gender}
          </span>
          <span>
            <strong>Age:</strong> {age}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
