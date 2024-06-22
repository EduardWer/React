import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './home.css';
import gif from "./2spvnepyxjwyv1geq7mh.gif"

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/send-email', {
        name,
        email,
        message,
      });

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');

      // Show success message or perform other actions
    } catch (error) {
      console.error(error);
      // Show error message or perform other actions
    }
  };

  const products = [
    // Add your products here (up to 10)
    {
      id: 1,
      name: 'Pubg',
      description: 'Окунитесь в мир батл рояля',
      price: 2,
      image: 'https://via.placeholder.com/150',
    },{
      id: 2,
      name: 'CS',
      description: 'Почувствуй  себя терористом',
      price: 12,
      image: 'https://via.placeholder.com/150',
    },{
      id: 3,
      name: 'Fortnite',
      description: 'Стань строителем и сражайся',
      price: 4,
      image: 'https://via.placeholder.com/150',
    },{
      id: 4,
      name: 'Бесконечное лето',
      description: 'Наслаждайся .....',
      price: 133,
      image: 'https://via.placeholder.com/150',
    },
      {
      id: 5,
      name: 'Apex',
      description: 'Давно не чувствовал себя униженым?',
      price: 133,
      image: 'https://via.placeholder.com/150',
    },
      {
      id: 6,
      name: 'Aragami',
      description: 'Стелс и ничего более, почувствуй себя убийцей',
      price: 133,
      image: 'https://via.placeholder.com/150',
    },
    // ...
  ];

  return (
    <Container fluid className="home-page">
      <img src={gif}  alt='Computer'  className="video"/>
      <Col>
        <Col>
          <h1>Добро пожаловать в ReactGame</h1>
          <p>
            Здесь вы найдёте аккаунты на любой вкус и кошелёк.
          </p>
        </Col>
      </Col>
      <Col>
        <Col md={6}>
          <h2>Featured Products</h2>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={4} sm={4}>
                <div className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Цена: ${product.price}</p>
                  <Button variant="primary">Подробнее</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Col>
      <Col className='Center' md={6}>
          <h2>Остались вопросы?</h2>
          <Form className='Forms' onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label></Form.Label>
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Электронная почта</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Ваш вопрос</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit">Отправить</Button>
          </Form>
        </Col>
    </Container>
  );
};

export default Home;
