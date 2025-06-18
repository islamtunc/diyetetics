// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ese-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain

import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada backend'e gönderme işlemi yapılabilir
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {submitted && <Alert variant="success">Mesajınız iletildi!</Alert>}
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Adınız</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>E-posta</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Mesajınız</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Gönder
      </Button>
    </Form>
  );
};

export default ContactForm;
