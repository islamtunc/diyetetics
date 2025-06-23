// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ese-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// La ilahe illallah
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
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
    <Form style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#f8f9fa" ,color: "#495057"}} onSubmit={handleSubmit}>
      {submitted && <Alert variant="success">Mesajınız iletildi!</Alert>}
      <br></br>
      <h2 className="mb-4 text-center">İletişim Formu</h2>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label style={{ color: "#495057" }}>Adınız</Form.Label>
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button style={{ backgroundColor: "#28a745", borderColor: "#28a745" }} variant="success" type="submit">
          Gönder
        </Button>

        <br></br>
      </div>


      <br></br>



      <p className="text-center" style={{ color: "#6c757d" }}>
        Bize ulaşmak için lütfen yukarıdaki formu doldurun.
      </p>
    </Form>
  );
};

export default ContactForm;
