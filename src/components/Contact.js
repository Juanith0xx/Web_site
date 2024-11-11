import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Formulario enviado');
  };

  return (
    <Form className='contact' onSubmit={handleSubmit}>
      <Form.Group controlId="formName" style={{ marginBottom: '10px' }}>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      
      <Form.Group controlId="formEmail" style={{ marginBottom: '10px' }}>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          placeholder="Escribe tu mensaje"
          value={formData.message}
          onChange={handleChange}
        />
      </Form.Group>

      <Button className='button' variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default ContactForm;